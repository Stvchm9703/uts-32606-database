
import { parse } from "@oclif/parser"
import * as dotenv from 'dotenv'
// @ts-ignore 
// @ts-nocheck
import snakeCase from 'to-snake-case'
import querystring from "node:querystring";
import axiod from "axios";

import { PrismaClient } from "../spotify-prisma/prisma-client-js/index.js";
import type { Prisma, Tag } from "../spotify-prisma/prisma-client-js/index.js";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)
const dateParse = (dateString: string, format: string) => dayjs(dateString, format).toDate()

// import { Timeout } from "https://deno.land/x/timeout/mod.ts";
const Timeout = {
  wait: (delay: number) => {
    return new Promise((ok, err) => {
      const id = setTimeout(ok, delay)
      return () => clearInterval(id)
    })
  }
}

const spotify_base_url = "https://api.spotify.com/v1"
let axiod_instance: any;
let runtime_token = ""
const base_config = () => ({
  baseUrl: spotify_base_url,
  headers: {
    'Accept': 'application/json',
    'Authorization': runtime_token
  },
})



export const tokenPrefetch = async ({ spotify_client_id, spotify_client_secr }: any) => {
  const result = await axiod("https://accounts.spotify.com/api/token", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      'grant_type': 'client_credentials',
      'client_id': spotify_client_id,
      'client_secret': spotify_client_secr
    },
    transformRequest: [function (data: any, headers) {
      return querystring.stringify(data);
    }],
  })

  const f = await result.data;
  if (!f.token_type || !f.access_token) return {};
  runtime_token = f.token_type + ' ' + f.access_token;
  axiod_instance = axiod.create(base_config());
  return { runtime_token, base_config: base_config() }
}




export interface ISearchQuery {
  album?: string,
  artist?: string,
  track?: string,
  year?: number[],
  upc?: "hipster" | "new",
  isrc?: string,
  genre?: string[]
}

export interface ISearch {
  q?: ISearchQuery | string
  type?: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook",
  market: string,
  limit?: number,
  offset?: number,
  include_external?: string
}

export interface ICategorySearch {
  country?: string,
  locale?: string,
  limit?: number,
  offset?: number,
}


export const fetchOptionGenre = async (current_config: any = {}) => {
  const result = await axiod.get('/recommendations/available-genre-seeds', { ...current_config });
  return result.data?.genre;
}


export const fetchOptionMarkets = async (current_config: any = {}) => {
  const result = await axiod.get(`${spotify_base_url}/markets`, { ...current_config });
  return result.data?.markets;
}

export const fetchOptionCategory = async (params: ICategorySearch, current_config: any = {}) => {
  const result = await axiod.get('/markets', { ...current_config, params });
  return result.data?.categories;
}

export const searchItem = async (params: ISearch, current_config: any = {}) => {
  const result = await axiod.get('/search', { ...current_config, params });
  return result.data;
}


export const fetchArtist = async (artist_id: string, current_config: any = {}) => {
  // const result = await axiod.get();
  const result = await axiod.get(`${spotify_base_url}/artists/${artist_id}`, { ...current_config });
  return result.data
}


export const fetchArtistRelatedArtist = async (artist_id: string, current_config: any = {}) => {
  const result = await axiod.get(`${spotify_base_url}/artists/${artist_id}/related-artists`, { ...current_config });
  return result.data
}

export const fetchArtistRelatedAlbums = async (artist_id: string, current_config: any = {}) => {
  const result = await axiod.get(`${spotify_base_url}/artists/${artist_id}/albums`, { ...current_config, params: { ...current_config.params, limit: 50 } });
  return result.data
}

export const fetchAlbum = async (id: string, current_config: any = {}) => {
  const result = await axiod.get(`${spotify_base_url}/albums`, { ...current_config, params: { id } })
  return result.data
}

export const fetchAlbumTrack = async (album_id: string, current_config: any = {}) => {
  const result = await axiod.get(`${spotify_base_url}/albums/${album_id}/tracks`, { ...current_config, params: { limit: 50 } })
  return result.data
}

export const fetchTrack = async (track_id: string, current_config: any = {}) => {
  const result = await axiod.get(`${spotify_base_url}/track/${track_id}`, { ...current_config });
  return result.data;
}






export const main = async (arg: any, env: any) => {
  const [spotify_client_id, spotify_client_secr] = [env['SPOTIFY_CLIENT_ID'], env['SPOTIFY_CLIENT_SECRET']]

  /// do all exec
  const preloads_set = await tokenPrefetch({ spotify_client_id, spotify_client_secr });

  console.log(preloads_set.runtime_token)
  // axiod.defaults = {
  //   ...axiod.defaults,
  //   ...(preloads_set.base_config)
  // }
  // axiod_instance = axiod.create(preloads_set.base_config as IRequest);
  // let isDryFetch = !!arg['dry-fetch'];
  let fetched_artist: any[] = [];
  // let fetched_ablum: any[] = []
  // let fetched_track: any[] = [];

  /// fetch set
  const preset_artist = [
    ...(!arg['test-run'] ? [
      "2ye2Wgw4gimLv2eAKyk1NB", //Metallica
      "3qm84nBOXUEQ2vnTfUTTFC", //Guns N' Roses
      "7kZTWx6cRLc0TSRPq1XBMP", // DECO*27
      "3jdzcmtw5XOmOkSb2mRDtr", // "T.M.Revolution",
      "2ayMogRmamCnzMAk4YiFAz", // TM
      "1k5LyiTCRzPjORzcgHqJxF", // Kanaria.
    ] : []),
    "56TyClNQ0oVZLhK2V9KhA6" //ZAQ
  ]

  const prisma_cli = new PrismaClient({
    log: [{ emit: 'event', level: 'query' }]
  });
  prisma_cli.$on('query', (e: any) => {
    console.log([e.query, e.params]);
  })
  const _fetchNext = async (url: string): Promise<any[]> => {
    const d = await axiod({ ...preloads_set.base_config, url });
    let y = []
    if (d.data.next) {
      y = await _fetchNext(d.data.next);
    }
    return [...d.data.items, ...y]
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
  })

  let market_list: Array<Tag | any> = [];
  const _bluk_create_market = async () => {
    const data_set: Array<string> = await fetchOptionMarkets(preloads_set.base_config);
    const tag_exec = await prisma_cli.tag.createMany(
      {
        data: data_set.map(elm => ({
          code: elm,
          type: "market",
          name: elm
        })),
        skipDuplicates: true,
      }
    );
    market_list = await prisma_cli.tag.findMany({
      where: { type: 'market' },
    })
  }


  const _bluk_create_artist = async () => {

    console.log('start create artist record : ', fetched_artist.length);
    for (const artistData of fetched_artist) {
      console.log('in batch : ', artistData.name);
      console.time('batch-' + artistData.id);
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
      // console.log(created)
      console.timeEnd('batch-' + artistData.id);
    }
  }



  // const _bluk_create_album = async () => {

  //   console.log('start create album record : ', fetched_ablum.length);
  //   for (const albumData of fetched_ablum) {
  //     console.log('in batch : ', albumData.name);
  //     console.time('batch-' + albumData.id);
  //     const artist_ids = await prisma_cli.artist.findMany({
  //       select: { id: true },
  //       where: {
  //         uid: { in: albumData.artists.map((elm: any) => elm.id) }
  //       }
  //     });
  //     const created = await prisma_cli.album.create({
  //       data: {
  //         uid: albumData.id,
  //         name: albumData.name,
  //         imageUrl: albumData.images && albumData.images[0] ? (albumData.images[0].url || "") : "",
  //         albumType: albumData.album_type,
  //         albumGroup: albumData.album_group,
  //         totalTracks: albumData.total_tracks,
  //         releaseDate: dateParse(albumData.release_date, "yyyy-MM-dd"),
  //         releaseDatePrecision: albumData.release_date_precision,
  //         // availableMarkets: _shorthand__market_create(albumData.available_markets),
  //         copyrights: "",
  //         Artists: {
  //           create: artist_ids.map(({ id }) => ({
  //             Artist: { connect: { id } }
  //           })),
  //         },
  //         // Artists: 
  //         // popularity: albumData.popularity,
  //       }
  //     })
  //     console.log(created)
  //     console.timeEnd('batch-' + albumData.id);

  //   }
  // }



  const chain_bluk_create_album = async (album_list: Array<any>) => {

    // console.log('start create album record : ', fetched_ablum.length);

    const excutation_queue = [];
    await prisma_cli.album.createMany({
      data: album_list.map((albumData: any) => ({
        uid: albumData.id,
        name: albumData.name,
        imageUrl: albumData.images && albumData.images[0] ? (albumData.images[0].url || "") : "",
        albumType: albumData.album_type,
        albumGroup: albumData.album_group,
        totalTracks: albumData.total_tracks,
        releaseDate: dateParse(albumData.release_date, "yyyy-MM-dd"),
        releaseDatePrecision: albumData.release_date_precision,
        // availableMarkets: _shorthand__market_create(albumData.available_markets),
        copyrights: "",
      })),
      skipDuplicates: true
    })

    let pending_track_set = []
    for (const albumData of album_list) {
      const alm_set = await prisma_cli.album.findFirst({
        where: { uid: albumData.id },
        select: { id: true, uid: true }
      });

      const artist_arr = await prisma_cli.artist.findMany({
        where: { uid: { in: albumData.artists.map((elm: any) => elm.id) } },
        select: { id: true, }
      })
      if (alm_set) {
        if (artist_arr) {
          excutation_queue.push(
            prisma_cli.albumProduceByArtist.createMany({
              data: artist_arr.map((artist_set: any) => ({
                albumId: alm_set.id,
                artistId: artist_set.id
              })),
              skipDuplicates: true
            })
          );
        }


        const available_market_list = market_list.filter(elms => albumData.available_markets.findIndex((am: string) => am === elms.code) > -1);
        excutation_queue.push(
          prisma_cli.albumAvailableMarket.createMany({
            data: available_market_list.map(market_set => ({
              albumId: alm_set.id,
              tagId: market_set.id,
            })),
            skipDuplicates: true
          })
        )
        pending_track_set.push({ id: alm_set.id, uid: alm_set.uid })
      }
    }
    await prisma_cli.$transaction(excutation_queue)
    for (const alm_set of pending_track_set) {
      await chain_bluk_create_trucks(alm_set.id, alm_set.uid);
    }

  }

  const chain_bluk_create_trucks = async (album_id: number, album_uid: string) => {
    const track_result = await fetchAlbumTrack(album_uid, preloads_set.base_config);
    let nextset = track_result.next ? await _fetchNext(track_result.next) : [];
    let track_temp = [...track_result.items, ...nextset].map(track_elm => ({ ...track_elm, album_uid, albumId: album_id }))
    const excutation_queue = [];
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
              id: track_sett.albumId,
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
      const available_market_list = market_list.filter(elms => track_sett.available_markets.findIndex((am: string) => am === elms.code) > -1);
      excutation_queue.push(
        prisma_cli.tracksAvailableMarket.createMany({
          data: available_market_list.map(market_set => ({
            tagId: market_set.id,
            trackId: track_record.id
          }))
        })
      );

      const artist_result = await prisma_cli.artist.findMany({
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
            }))
          })
        )
      }
    }

    await prisma_cli.$transaction(excutation_queue);
  }

  const _bluk_fetch_artist = async () => {
    console.log("fetching artist")
    console.time("fetch-artist");
    for (const artist_id of preset_artist) {
      const [artist_detail, related_artist_list] = await Promise.allSettled([
        fetchArtist(artist_id, preloads_set.base_config),
        fetchArtistRelatedArtist(artist_id, preloads_set.base_config),
      ]);

      if (artist_detail.status === 'fulfilled') {
        fetched_artist.push(artist_detail.value);
      }
      if (!arg['test-run'] && related_artist_list.status === 'fulfilled') {
        for (const artist_set of related_artist_list.value.artists) {
          if (fetched_artist.findIndex(item => item.id === artist_set.id) === -1) {
            fetched_artist.push(artist_set);
          }
        }
      }

    }
    console.timeEnd("fetch-artist");

    // _bluk_create_artist();
    (arg['dry-fetch'] ? void 0 : _bluk_create_artist());
  }

  const _bluk_fetch_album = async () => {
    for (const elm of fetched_artist) {
      let artist_albums = [];
      const prom = await fetchArtistRelatedAlbums(elm.id, preloads_set.base_config)
      console.log(elm.name + ' : ' + prom.total);
      console.time(elm.name)
      // fetched_ablum.push(...prom.items);
      let nextset = prom.next ? await _fetchNext(prom.next) : [];
      console.timeEnd(elm.name)
      // fetched_ablum.push(...prom.items, ...nextset);
      artist_albums.push(...prom.items, ...nextset);
      await chain_bluk_create_album(artist_albums);
    }
  }

  // const _bluk_fetch_track = async () => {
  //   for (const elm of fetched_ablum) {
  //     try {
  //       console.log(elm.id);

  //       const prom = await fetchAlbumTrack(elm.id, preloads_set.base_config);
  //       console.log(elm.name + ' : ' + prom.total);
  //       console.time(elm.name)
  //       // fetched_track.push(...prom.items);
  //       let nextset = prom.next ? await _fetchNext(prom.next) : [];
  //       console.timeEnd(elm.name)
  //       let track_temp = [...prom.items, ...nextset].map(track_elm => ({ ...track_elm, album_uid: elm.id }))
  //       fetched_track.push(...track_temp);

  //       // chain to create 
  //     } catch (ee) {
  //       console.warn(ee)
  //       console.warn(preloads_set.base_config)
  //     }
  //   }
  // }





  await _bluk_create_market();
  await _bluk_fetch_artist();
  // (arg['dry-fetch'] ? void 0 : _bluk_create_artist());
  await _bluk_fetch_album();
  // (arg['dry-fetch'] ? void 0 : _bluk_create_album());
  // await _bluk_fetch_track();
  // console.log(fetched_track[0])

  if (!arg['dry-fetch']) {
    console.log('gay')
    // console.log({ fetched_artist: fetched_artist.length, fetched_ablum: fetched_ablum.length, })
    console.log(Object.keys(fetched_artist[0]));
  }
}
if (typeof require !== 'undefined' && require.main === module) {
  // }
  // if (import.meta.main) {
  // const argSet = flags.parse(Deno.args);
  // const out = cli.parse(process.argv, {
  //   flags: {
  //     'dry-fetch': cli.flags.boolean({ char: 'd', name: "dry-fetch" }),
  //   },
  // })
  dotenv.config();
  const envSet = process.env;
  const argSet = Object.fromEntries(process.argv.map(elm => [elm.replace('--', ''), true]));

  // console.log(envSet, out);
  main(argSet, envSet)
}
