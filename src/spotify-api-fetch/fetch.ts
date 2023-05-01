
import * as flags from "https://deno.land/std/flags/mod.ts"
import { load as envLoad } from "https://deno.land/std/dotenv/mod.ts";
import snakeCase from "https://deno.land/x/case/snakeCase.ts";
import * as querystring from "https://deno.land/x/querystring@v1.0.2/mod.js";
import axiod from "https://deno.land/x/axiod/mod.ts";
import { IRequest, IConfig } from 'https://deno.land/x/axiod/interfaces.ts';
// import { PrismaClient } from "@spotify-prisma";
// import type { Prisma, Tag } from "@spotify-prisma";
import { parse as dateParse } from 'https://deno.land/std/datetime/mod.ts'
import { Timeout } from "https://deno.land/x/timeout/mod.ts";
import { create } from "https://deno.land/x/abortable@1.6/abort.ts";

// import Datetime
// import { Artist } from "../spotify-prisma/prisma-client-js/index.js";
// import type {  } from "../spotify-prisma/prisma-client-js/index.d.ts"
const spotify_base_url = "https://api.spotify.com/v1"
let axiod_instance: any;
let runtime_token = ""
const base_config = (): IRequest => ({
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
  if (!f.token_type || !f.access_token) return "";
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


export const fetchOptionGenre = async (current_config: IConfig = {}) => {
  const result = await axiod.get('/recommendations/available-genre-seeds', { ...current_config });
  return result.data?.genre;
}


export const fetchOptionMarkets = async (current_config: IConfig = {}) => {
  const result = await axiod.get('/markets', { ...current_config });
  return result.data?.markets;
}

export const fetchOptionCategory = async (params: ICategorySearch, current_config: IConfig = {}) => {
  const result = await axiod.get('/markets', { ...current_config, params });
  return result.data?.categories;
}

export const searchItem = async (params: ISearch, current_config: IConfig = {}) => {
  const result = await axiod.get('/search', { ...current_config, params });
  return result.data;
}


export const fetchArtist = async (artist_id: string, current_config: IConfig = {}) => {
  // const result = await axiod.get();
  const result = await axiod.get(`${spotify_base_url}/artists/${artist_id}`, { ...current_config });
  return result.data
}


export const fetchArtistRelatedArtist = async (artist_id: string, current_config: IConfig = {}) => {
  const result = await axiod.get(`${spotify_base_url}/artists/${artist_id}/related-artists`, { ...current_config });
  return result.data
}

export const fetchArtistRelatedAlbums = async (artist_id: string, current_config: IConfig = {}) => {
  const result = await axiod.get(`${spotify_base_url}/artists/${artist_id}/albums`, { ...current_config, params: { ...current_config.params, limit: 50 } });
  return result.data
}

export const fetchAlbum = async (id: string, current_config: IConfig = {}) => {
  const result = await axiod.get(`${spotify_base_url}/albums/${id}`, { ...current_config })
  return result.data
}

export const fetchAlbumTrack = async (album_id: string, current_config: IConfig = {}) => {
  const result = await axiod.get(`${spotify_base_url}/albums/${album_id}/tracks`, { ...current_config, params: { limit: 50 } })
  return result.data
}

export const fetchTrack = async (track_id: string, current_config: IConfig = {}) => {
  const result = await axiod.get(`${spotify_base_url}/track/${track_id}`, { ...current_config });
  return result.data;
}



/// fetch set
const preset_artist = [
  "2ye2Wgw4gimLv2eAKyk1NB", //Metallica
  "3qm84nBOXUEQ2vnTfUTTFC", //Guns N' Roses
  "7kZTWx6cRLc0TSRPq1XBMP", // DECO*27
  "3jdzcmtw5XOmOkSb2mRDtr", // "T.M.Revolution",
  "2ayMogRmamCnzMAk4YiFAz", // TM
  "1k5LyiTCRzPjORzcgHqJxF", // Kanaria.
  "56TyClNQ0oVZLhK2V9KhA6", //ZAQ,.
  "0MK8l3nURwwQIjafvXoJJt"
]


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
  let isDryFetch = !!arg['dry-fetch'];
  let fetched_artist = [];
  let fetched_album = []
  let fetched_track = [];

  // const prisma_cli = new PrismaClient({
  //   log: [{ emit: 'event', level: 'query' }]
  // });
  // prisma_cli.$on('query', (e: any) => {
  //   console.log(e)
  // })
  const _fetchNext = async (url: string) => {
    const d = await axiod({ ...preloads_set.base_config, url });
    let y = []
    if (d.data.next) {
      y = await _fetchNext(d.data.next);
    }
    return [...d.data.items, ...y]
  }
  const _bluk_fetch_artist = async () => {
    console.log("fetching artist")
    console.time("fetch-artist");
    for (const artist_id of preset_artist) {
      const [artist_detail, related_artist_list] = await Promise.allSettled([
        fetchArtist(artist_id, preloads_set.base_config),
        fetchArtistRelatedArtist(artist_id, preloads_set.base_config),
      ]);
      // console.log(artist_detail , related_artist_list);
      if (artist_detail.status === 'fulfilled') {
        fetched_artist.push(artist_detail.value);
      }
      if (related_artist_list.status === 'fulfilled') {
        for (const artist_set of related_artist_list.value.artists) {
          if (fetched_artist.findIndex(item => item.id === artist_set.id) === -1) {
            fetched_artist.push(artist_set);
          }
        }
      }
    }
    console.timeEnd("fetch-artist");
    // if (Deno.)
    await Deno.writeTextFile("./data/artist.json", JSON.stringify(fetched_artist), { append: false, create: true, createNew: true })
    return Promise.resolve();

  }

  const _bluk_fetch_album = async () => {
    console.log('_bluk_fetch_album')
    console.log(fetched_artist.length);
    for (const elm of fetched_artist) {
      await Timeout.wait(1200);
      const prom = await fetchArtistRelatedAlbums(elm.id, preloads_set.base_config)
      console.log(elm.name + ' : ' + prom.total);
      console.time(elm.name)
      // fetched_ablum.push(...prom.items);
      let nextset = prom.next ? await _fetchNext(prom.next) : [];
      console.timeEnd(elm.name)
      fetched_album.push(...prom.items, ...nextset);
    }
    // let page_count = 0;
    // let page_ramain = 0;
    // let pagemax = fetched_album.length
    // let page_offset = 200;
    // while (page_ramain < pagemax) {
    //   Deno.writeTextFileSync(`./data/album-${page_count}.json`, JSON.stringify(
    //     fetched_album.slice(page_offset * page_count, (page_offset * (page_count + 1)) - 1)),
    //     { append: false, create: true, createNew: true }
    //   );
    //   page_count++;
    //   page_ramain = (page_offset * page_count + 1) - 1;
    // }
    Deno.writeTextFileSync(`./data/album-list.txt`, fetched_album.map(elm => elm.id).join(`\n`), { append: false, create: true, createNew: true })
  }

  const _bluk_fetch_track = async () => {
    for (const elm of fetched_album) {
      try {
        await Timeout.wait(200);
        const prom = await fetchAlbumTrack(elm.id, preloads_set.base_config);
        console.log(elm.name + ' : ' + prom.total);
        console.time(elm.name)
        // fetched_track.push(...prom.items);
        let nextset = prom.next ? await _fetchNext(prom.next) : [];
        console.timeEnd(elm.name)
        let track_temp = [...prom.items, ...nextset].map(track_elm => ({ ...track_elm, album_uid: elm.id }))
        Deno.writeTextFileSync(`./data/track-${elm.id}.json`, JSON.stringify(track_temp),
          { append: false, create: true, createNew: true }
        );
        fetched_track.push(...track_temp);
      } catch (ee) {
        console.warn(ee)
        // console.warn(preloads_set.base_config)
      }
    }
    // let page_count = 0;
    // let page_ramain = 0;
    // let pagemax = fetched_track.length
    // let page_offset = 200;
    // while (page_ramain < pagemax) {
    //   Deno.writeTextFileSync(`./data/track-${page_count}.json`, JSON.stringify(
    //     fetched_track.slice(page_offset * page_count, (page_offset * page_count + 1) - 1)),
    //     { append: false, create: true, createNew: true }
    //   );
    //   page_count++;
    //   page_ramain = (page_offset * page_count + 1) - 1;
    // }
    // Deno.writeTextFileSync("./data/track.json", JSON.stringify(fetched_track), { append: true, create: true })

  }
  /**
    const _shorthand__genres_create = (genres_arr: any[]) => ({
      create: genres_arr.map((elm: string) => ({
        Tag: {
          connectOrCreate: {
            create: {
              name: elm, type: "genres", code: snakeCase(elm)
            },
            where: {
              code: snakeCase(elm)
            }
          }
        }
      }))
    })
  
    const _shorthand__market_create = (genres_arr: any[]) => ({
      create: genres_arr.map((elm: string) => ({
        Tag: {
          connectOrCreate: {
            create: {
              name: elm, type: "market", code: (elm)
            },
            where: {
              code: (elm)
            }
          }
        }
      }))
    })
  
    const _bluk_create_artist = async () => {
  
      console.log('start create artist record : ', fetched_artist.length);
      for (const artistData of fetched_artist) {
        console.log('in batch : ', artistData.name);
        console.time('batch-' + artistData.id);
        await Timeout.wait(500);
        const created = await prisma_cli.artist.create({
          data: {
            uid: artistData.id,
            name: artistData.name,
            imageUrl: artistData.images[0].url,
            popularity: artistData.popularity,
            Genres: _shorthand__genres_create(artistData.genres),
          } as Prisma.ArtistCreateInput
        } as Prisma.ArtistCreateArgs)
        console.log(created)
        console.timeEnd('batch-' + artistData.id);
      }
    }
    const _bluk_create_album = async () => {
  
      console.log('start create album record : ', fetched_album.length);
      for (const albumData of fetched_album) {
        console.log('in batch : ', albumData.name);
        console.time('batch-' + albumData.id);
        await Timeout.wait(500);
        const artist_ids = await prisma_cli.artist.findMany({
          select: { id: true },
          where: {
            uid: { in: albumData.artists.map(elm => elm.id) }
          }
        });
        const created = await prisma_cli.album.create({
          data: {
            uid: albumData.id,
            name: albumData.name,
            imageUrl: albumData.images[0].url,
            albumType: albumData.album_type,
            albumGroup: albumData.album_group,
            totalTracks: albumData.total_tracks,
            releaseDate: dateParse(albumData.release_date, "yyyy-MM-dd"),
            releaseDatePrecision: albumData.release_date_precision,
            availableMarkets: _shorthand__market_create(albumData.available_markets),
            copyrights: "",
            Artists: {
              create: artist_ids.map(({ id }) => ({
                Artist: { connect: { id } }
              })),
            },
            // Artists: 
            // popularity: albumData.popularity,
          }
        })
        console.log(created)
        console.timeEnd('batch-' + albumData.id);
  
      }
    }
  
    */
  await _bluk_fetch_artist();
  await _bluk_fetch_album();
  await _bluk_fetch_track();

  // if (!arg['dry-fetch']) {
  //   console.log('gay')
  //   console.log({ fetched_artist: fetched_artist.length, fetched_ablum: fetched_album.length, })
  //   console.log(Object.keys(fetched_artist[0]));
  // }
}
if (import.meta.main) {
  const argSet = flags.parse(Deno.args);
  const envSet = await envLoad()
  console.log(envSet);
  main(argSet, envSet)
}
