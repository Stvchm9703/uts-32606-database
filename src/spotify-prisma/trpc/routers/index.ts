import { t } from "./helpers/createRouter";
import { tagsRouter } from "./Tag.router";
import { artistsRouter } from "./Artist.router";
import { artistdatametasRouter } from "./ArtistDataMeta.router";
import { tracksRouter } from "./Track.router";
import { trackmetasRouter } from "./TrackMeta.router";
import { albumsRouter } from "./Album.router";
import { albummetasRouter } from "./AlbumMeta.router";
import { playlistsRouter } from "./Playlist.router";
import { playlistmetasRouter } from "./PlaylistMeta.router";
import { tracksonplaylistsRouter } from "./TracksOnPlaylist.router";
import { tracksavailablemarketsRouter } from "./TracksAvailableMarket.router";
import { trackproducebyartistsRouter } from "./TrackProduceByArtist.router";
import { albumproducebyartistsRouter } from "./AlbumProduceByArtist.router";
import { albumavailablemarketsRouter } from "./AlbumAvailableMarket.router";
import { artistingenresRouter } from "./ArtistInGenres.router";

export const appRouter = t.router({
  tag: tagsRouter,
  artist: artistsRouter,
  artistdatameta: artistdatametasRouter,
  track: tracksRouter,
  trackmeta: trackmetasRouter,
  album: albumsRouter,
  albummeta: albummetasRouter,
  playlist: playlistsRouter,
  playlistmeta: playlistmetasRouter,
  tracksonplaylist: tracksonplaylistsRouter,
  tracksavailablemarket: tracksavailablemarketsRouter,
  trackproducebyartist: trackproducebyartistsRouter,
  albumproducebyartist: albumproducebyartistsRouter,
  albumavailablemarket: albumavailablemarketsRouter,
  artistingenres: artistingenresRouter
})

