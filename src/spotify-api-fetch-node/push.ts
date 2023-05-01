
import { PrismaClient } from "../spotify-prisma/prisma-client-js/index.js";
import type { Prisma, Tag, Artist } from "../spotify-prisma/prisma-client-js/index.js";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
// @ts-ignore 
// @ts-nocheck
import snakeCase from 'to-snake-case';
import * as dotenv from 'dotenv';
import fs from "fs/promises";
import { writeFileSync } from 'fs';
import { glob } from 'glob';
dayjs.extend(customParseFormat)
const dateParse = (dateString: string, format: string) => dayjs(dateString, format).toDate()
const market_str_list: Array<string> = ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"]
const market_tag_list: Array<Tag> = []
const nowtime = Date.now()
const create_inst = (process_name: string) => {
  const prisma_cli = new PrismaClient({
    log: [{ emit: 'event', level: 'query' }]
  });
  prisma_cli.$on('query', (e: any) => {
    console.log([e.query, e.params]);
    writeFileSync(`./log/${process_name}--${nowtime}.log`, `--\n${e.query}\n [${e.params.join(',')}] \n--`, { flag: 'a' });
  })
  return prisma_cli;
}
const _shorthand__genres_create = (genre_list: Array<any>) => ({
  create: genre_list.map(gen_set => ({
    Tag: {
      connectOrCreate: {
        create: { code: snakeCase(gen_set), name: gen_set, type: "genres" },
        where: { code: snakeCase(gen_set) }
      }
    }
  }))
});

const create_market_tag = async () => {
  const prisma_cli = create_inst('market-tag');
  // await prisma_cli.tag.createMany({
  //   data: market_str_list.map(elm => ({
  //     code: elm,
  //     type: 'market',
  //     name: elm
  //   })),
  //   skipDuplicates: true,
  // });
  const result = await prisma_cli.tag.findMany({
    where: {
      type: 'market',
    }
  });
  if (result) {
    market_tag_list.push(...result);
  }
  prisma_cli.$disconnect();
}
const create_artist = async (artistData: any, prisma_cli: any) => {

  await prisma_cli.artist.upsert({
    create: {
      uid: artistData.id,
      name: artistData.name,
      imageUrl: artistData.images && artistData.images[0] ? (artistData.images[0].url || "") : "",
      popularity: artistData.popularity,
      Genres: _shorthand__genres_create(artistData.genres),
    },
    update: {},
    where: {
      uid: artistData.id,
    }
  });
}

const create_album = async (albumData: any, nowtime: string | number, prisma_cli: any) => {
  const artist_id_list = await prisma_cli.artist.findMany({
    where: {
      uid: { in: albumData.artists.map((elm: any) => elm.id) }
    },
    select: { id: true, }
  })

  const excutation_queue = [];
  const alm_set = await prisma_cli.album.upsert({
    // data: album_list.map((albumData: any) => ({
    create: {
      uid: albumData.id,
      name: albumData.name,
      imageUrl: albumData.images && albumData.images[0] ? (albumData.images[0].url || "") : "",
      albumType: albumData.album_type,
      albumGroup: albumData.album_group,
      totalTracks: albumData.total_tracks,
      releaseDate: albumData.release_date && albumData.release_date !== "" ? dateParse(albumData.release_date, "yyyy-MM-dd") : Date.now(),
      releaseDatePrecision: albumData.release_date_precision,
      copyrights: "",
    },
    update: {},
    where: { uid: albumData.id, },
    select: { id: true, uid: true, }
  });
  // artist 
  excutation_queue.push(
    prisma_cli.albumProduceByArtist.createMany({
      data: artist_id_list.map((artist_set: any) => ({
        albumId: alm_set.id,
        artistId: artist_set.id
      })),
      skipDuplicates: true
    })
  );

  // available_market
  const available_market_list = market_tag_list.filter(elms => albumData.available_markets.findIndex((am: string) => am === elms.code) > -1);
  excutation_queue.push(
    prisma_cli.albumAvailableMarket.createMany({
      data: available_market_list.map(market_set => ({
        albumId: alm_set.id,
        tagId: market_set.id,
      })),
      skipDuplicates: true
    })
  );
  await prisma_cli.$transaction(excutation_queue);
  await fs.writeFile(`./data/album-inserted-${nowtime}.txt`, albumData.id + '\n', { flag: 'a' });
  // await chain_bluk_create_trucks(alm_set.id, alm_set.uid, nowtime);
}


const chain_bluk_create_trucks = async (track_filename: string, nowtime: string | number, prisma_cli: any) => {
  // const track_result = await fetchAlbumTrack(album_uid, preloads_set.base_config);
  // let nextset = track_result.next ? await _fetchNext(track_result.next) : [];
  // let track_temp = [...track_result.items, ...nextset].map(track_elm => ({ ...track_elm, album_uid, albumId: album_id }))
  const track_temp: Array<any> = [];
  // const content = await Deno.readTextFile(`./data/track-${album_uid}.json`);
  try {
    const content = await fs.readFile(track_filename, 'utf8');
    if (!content || content === "") return Promise.resolve(true);
    track_temp.push(...JSON.parse(content));
  }
  catch (e) {
    fs.writeFile(`./data/track-missing-${nowtime}.txt`, track_filename + '\n', { flag: 'a+' });
    return Promise.resolve(false);
  }
  const excutation_queue = [];
  const { album_uid } = track_temp[0];
  const from_albm = await prisma_cli.album.findFirst({
    where: { uid: track_temp[0].album_uid },
    select: { id: true, uid: true }
  });
  if (!from_albm) return Promise.resolve(false);
  for (const track_sett of track_temp) {
    const track_record = await prisma_cli.track.upsert({
      create: {
        uid: track_sett.id,
        name: track_sett.name,
        discNumber: track_sett.disc_number,
        durationMs: track_sett.duration_ms,
        explicit: track_sett.explicit,
        popularity: track_sett.popularity || 0,
        previewUrl: track_sett.preview_url || "",
        trackNumber: track_sett.track_number,
        isLocal: track_sett.is_local,
        Album: {
          connect: {
            id: from_albm.id,
          }
        },
      },
      update: {},
      where: {
        uid: track_sett.id,
      }
    })
    // );
    //  available-market
    const available_market_list = market_tag_list.filter(elms => track_sett.available_markets.findIndex((am: string) => am === elms.code) > -1);
    excutation_queue.push(
      prisma_cli.tracksAvailableMarket.createMany({
        data: available_market_list.map(market_set => ({
          tagId: market_set.id,
          trackId: track_record.id
        })),
        skipDuplicates: true
      })
    );

    const artist_result: Array<any> = await prisma_cli.artist.findMany({
      where: {
        uid: {
          in: track_sett.artists.map((track_artist: any) => track_artist.id)
        }
      },
      select: { id: true }
    });
    if (artist_result) {
      excutation_queue.push(
        prisma_cli.trackProduceByArtist.createMany({
          data: artist_result.map((track_artist_id) => ({
            artistId: track_artist_id.id,
            trackId: track_record.id
          })),
          skipDuplicates: true
        })
      )
    }
  }

  await prisma_cli.$transaction(excutation_queue);
  await fs.writeFile(`./data/track-inserted-${nowtime}.txt`, album_uid + '\n', { flag: 'a+' });
  return Promise.resolve(true);
}

async function main() {
  dotenv.config();
  const last_loaded = await fs.readFile('./data/album-inserted-1682352581080.txt', 'utf8');
  const last_loaded_list: Array<string> = last_loaded.split('\n');
  console.log(last_loaded_list);
  const last_loaded_2 = await fs.readFile('./data/track-inserted-1682397810718.txt', 'utf8');
  // const last_loaded_2 = ""
  const last_loaded_list_2: Array<string> = last_loaded_2.split('\n');
  // console.log(last_loaded_list);
  // const file_list_artlist = await glob(`./data/artist`)


  // await create_market_tag();
  const artist_prom = new Promise(async (res) => {
    const prisma_cli = create_inst('artist');
    const raw_artist_data = await fs.readFile('./data/artist.json', 'utf8');
    const artist_data = JSON.parse(raw_artist_data);
    for (const artist_set of artist_data) {
      await create_artist(artist_set, prisma_cli);
      await fs.writeFile(`./data/artist-inserted-${nowtime}.txt`, artist_set.id + '\n', { flag: 'a' });
    }
    prisma_cli.$disconnect()
    return res(true);
  })
  const album_prom = new Promise(async (res) => {
    const prisma_cli = create_inst('album');

    const album_file_list = await glob('./data/album-*.json', {
      ignore: last_loaded_list.map(elm => `data/album-${elm}.json`),
    });
    console.log({ album_file_list })
    const new_push_list = [];
    for (const fikle of album_file_list) {
      let y = last_loaded_list.find(elm => fikle === `data/album-${elm}.json`)
      if (!y) {
        new_push_list.push(fikle)
      }
    }
    console.log({ fileExist: album_file_list.length, loaded: last_loaded_list.length });
    console.log(new_push_list)
    for (const alb_filename of new_push_list) {

      const raw_alb_data = await fs.readFile(alb_filename, 'utf8');
      const album_data = JSON.parse(raw_alb_data);
      await create_album(album_data, nowtime, prisma_cli);
    }
    prisma_cli.$disconnect()

    return res(true);
  });



  const track_prom = (prefix: string | number) => new Promise(async (res) => {
    const prisma_cli = create_inst('track');

    const track_file_list = await glob(`./data/track-*.json`, {
      ignore: last_loaded_list_2.map(elm => `data/track-${elm}.json`)
    });

    const new_push_list = [];
    for (const fikle of track_file_list) {
      let y = last_loaded_list_2.find(elm => fikle === `data/album-${elm}.json`)
      if (!y) {
        new_push_list.push(fikle)
      }
    }
    console.log({ fileExist: track_file_list.length, loaded: last_loaded_list_2.length });
    console.log(new_push_list)



    for (const alb_filename of track_file_list) {
      await chain_bluk_create_trucks(alb_filename, nowtime, prisma_cli);
    }
    prisma_cli.$disconnect();
    return res(true);
  })
  let char_data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  // const r = await Promise.allSettled([
  //   new Promise(create_market_tag),
  //   artist_prom,
  //   album_prom,
  // ]);
  await create_market_tag();
  // await Promise.all([artist_prom, album_prom]);
  // await Promise.all([album_prom]);
  // console.log(r);
  await track_prom('0')
  // const e = await Promise.allSettled(char_data.map(char => track_prom(char)))
}

if (typeof require !== 'undefined' && require.main === module) {
  main();
}
