import { fetchArtistRelatedAlbums, fetchAlbumTrack, fetchAlbum, tokenPrefetch } from "./fetch.ts"
import { load as envLoad } from "https://deno.land/std/dotenv/mod.ts";
import { Timeout } from "https://deno.land/x/timeout/mod.ts";

import { exists } from "https://deno.land/std/fs/mod.ts";
const env = await envLoad();
const [spotify_client_id, spotify_client_secr] = [env['SPOTIFY_CLIENT_ID'], env['SPOTIFY_CLIENT_SECRET']]

/// do all exec
const preloads_set = await tokenPrefetch({ spotify_client_id, spotify_client_secr });
const fetched_album: Array<string> = [];

const res = await Deno.readTextFile("./data/album-list.txt")
fetched_album.push(...(new Set(res.split("\n"))));
console.log(fetched_album);



const _fetchNext = async (url: string): Promise<Array<any>> => {
  const d = await axiod({ ...preloads_set.base_config, url });
  let y = []
  if (d.data.next) {
    y = await _fetchNext(d.data.next);
  }
  return [...d.data.items, ...y]
}

const _bluk_fetch_album = async () => {
  console.log('_bluk_fetch_album')
  console.log(fetched_album.length);
  for (const elm of fetched_album) {
    console.log('check-album-info: \t', elm);
    if (!exists(`./data/album-${elm}.json`)) {
      await Timeout.wait(200);
      const prom = await fetchAlbum(elm, preloads_set.base_config)
      console.timeEnd(elm)
      Deno.writeTextFileSync(`./data/album-${elm}.json`, JSON.stringify(prom), { append: false, create: true, createNew: true })
    }
    await _bluk_fetch_album_track(elm);

  }
}

const _bluk_fetch_album_track = async (album_id: string) => {
  console.log('check-album-track: \t' , album_id);
  if (exists(`./data/track-${album_id}.json`)) return Promise.resolve(true);
  await Timeout.wait(200);
  const prom = await fetchAlbumTrack(album_id, preloads_set.base_config);
  console.time('album-id : ' + album_id)
  let nextset = prom.next ? await _fetchNext(prom.next) : [];
  console.timeEnd('album-id')
  let track_temp = [...prom.items, ...nextset].map(track_elm => ({ ...track_elm, album_uid: album_id }))
  Deno.writeTextFileSync(`./data/track-${album_id}.json`, JSON.stringify(track_temp),
    { append: false, create: true, createNew: true }
  );
}


await _bluk_fetch_album();