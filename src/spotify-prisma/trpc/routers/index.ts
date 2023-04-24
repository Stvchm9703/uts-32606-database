import { t } from "./helpers/createRouter";
import { tagsRouter } from "./Tag.router";
import { categoriesRouter } from "./Category.router";
import { usersRouter } from "./User.router";
import { artistsRouter } from "./Artist.router";
import { tracksRouter } from "./Track.router";
import { albumsRouter } from "./Album.router";
import { playlistsRouter } from "./Playlist.router";
import { tracksonplaylistsRouter } from "./TracksOnPlaylist.router";
import { tracksavailablemarketsRouter } from "./TracksAvailableMarket.router";
import { trackproducebyartistsRouter } from "./TrackProduceByArtist.router";
import { playlistonfollowersRouter } from "./PlaylistOnFollower.router";
import { albumproducebyartistsRouter } from "./AlbumProduceByArtist.router";
import { albumavailablemarketsRouter } from "./AlbumAvailableMarket.router";
import { artistingenresRouter } from "./ArtistInGenres.router";
import { artistonfollowingsRouter } from "./ArtistOnFollowing.router";

export const appRouter = t.router({
  tag: tagsRouter,
  category: categoriesRouter,
  user: usersRouter,
  artist: artistsRouter,
  track: tracksRouter,
  album: albumsRouter,
  playlist: playlistsRouter,
  tracksonplaylist: tracksonplaylistsRouter,
  tracksavailablemarket: tracksavailablemarketsRouter,
  trackproducebyartist: trackproducebyartistsRouter,
  playlistonfollower: playlistonfollowersRouter,
  albumproducebyartist: albumproducebyartistsRouter,
  albumavailablemarket: albumavailablemarketsRouter,
  artistingenres: artistingenresRouter,
  artistonfollowing: artistonfollowingsRouter
})

