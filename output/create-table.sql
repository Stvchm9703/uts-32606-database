-- Student Name: Ho Man Cheng
-- Student ID : 24581896
-- email : homan.cheng@student.uts.edu.au

DROP VIEW IF EXISTS "Artist_fj"  CASCADE;
DROP VIEW IF EXISTS "Track_fj"  CASCADE;
DROP VIEW IF EXISTS "Album_fj"  CASCADE;
DROP VIEW IF EXISTS "Playlist_fj"  CASCADE;

DROP TABLE IF EXISTS "Tag"                   CASCADE;
DROP TABLE IF EXISTS "Artist"                CASCADE;
DROP TABLE IF EXISTS "ArtistMeta"            CASCADE;
DROP TABLE IF EXISTS "Track"                 CASCADE;
DROP TABLE IF EXISTS "TrackMeta"             CASCADE;
DROP TABLE IF EXISTS "Album"                 CASCADE;
DROP TABLE IF EXISTS "AlbumMeta"             CASCADE;
DROP TABLE IF EXISTS "Playlist"              CASCADE;
DROP TABLE IF EXISTS "PlaylistMeta"          CASCADE;
DROP TABLE IF EXISTS "TracksOnPlaylist"      CASCADE;
DROP TABLE IF EXISTS "TracksAvailableMarket" CASCADE;
DROP TABLE IF EXISTS "TrackProduceByArtist"  CASCADE;
DROP TABLE IF EXISTS "AlbumProduceByArtist"  CASCADE;
DROP TABLE IF EXISTS "AlbumAvailableMarket"  CASCADE;
DROP TABLE IF EXISTS "ArtistInGenres"        CASCADE;
DROP TABLE IF EXISTS "ArtistOnFollowing"     CASCADE;


-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "popularity" INTEGER,
    "imageUrl" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ArtistMeta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT NOT NULL,
    CONSTRAINT "ArtistMeta_pkey" FOREIGN KEY ("id") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "albumType" TEXT NOT NULL,
    "totalTracks" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);


-- CreateTable
CREATE TABLE "AlbumMeta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "releaseDatePrecision" TEXT NOT NULL,
    "copyrights" TEXT,

    -- CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
    CONSTRAINT "AlbumMeta_pkey" FOREIGN KEY ("id") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "discNumber" INTEGER NOT NULL,
    "popularity" INTEGER,
    "trackNumber" INTEGER NOT NULL,
    "albumId" INTEGER,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- CreateTable Part
CREATE TABLE "TrackMeta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT NOT NULL,
    "previewUrl" TEXT,
    "durationMs" INTEGER NOT NULL,
    CONSTRAINT "TrackMeta_pkey" FOREIGN KEY ("id") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL,
    "primaryColor" TEXT,
    "imagesId" TEXT,
    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PlaylistMeta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT,
    CONSTRAINT "PlaylistMeta_pkey" FOREIGN KEY ("id") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TracksOnPlaylist" (
    "playlistId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    CONSTRAINT "TracksOnPlaylist_pkey" PRIMARY KEY ("playlistId","trackId"),
    CONSTRAINT "TracksOnPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TracksOnPlaylist_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TracksAvailableMarket" (
    "tagId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    CONSTRAINT "TracksAvailableMarket_pkey" PRIMARY KEY ("trackId","tagId"),
    -- AddForeignKey
    CONSTRAINT "TracksAvailableMarket_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    -- AddForeignKey
    CONSTRAINT "TracksAvailableMarket_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT "TracksAvailableMarket_tagId_check" CHECK( "tagId" BETWEEN 1 AND 184 ) 
);

-- CreateTable
CREATE TABLE "TrackProduceByArtist" (
    "trackId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "TrackProduceByArtist_pkey" PRIMARY KEY ("trackId","artistId"),
    -- AddForeignKey
    CONSTRAINT "TrackProduceByArtist_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    -- AddForeignKey
    CONSTRAINT "TrackProduceByArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE
);


-- CreateTable
CREATE TABLE "AlbumProduceByArtist" (
    "albumId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "AlbumProduceByArtist_pkey" PRIMARY KEY ("albumId","artistId"),
    -- AddForeignKey
    CONSTRAINT "AlbumProduceByArtist_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE,

    -- AddForeignKey
    CONSTRAINT "AlbumProduceByArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlbumAvailableMarket" (
    "albumId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "AlbumAvailableMarket_pkey" PRIMARY KEY ("albumId","tagId"),
    -- AddForeignKey
    CONSTRAINT "AlbumAvailableMarket_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    -- AddForeignKey
    CONSTRAINT "AlbumAvailableMarket_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE,

    CONSTRAINT "AlbumAvailableMarket_tagId_check" CHECK( "tagId" BETWEEN 1 AND 184 ) 
);

-- CreateTable
CREATE TABLE "ArtistInGenres" (
    "artistId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "ArtistInGenres_pkey" PRIMARY KEY ("artistId","tagId"),
    -- AddForeignKey
    CONSTRAINT "ArtistInGenres_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    -- AddForeignKey
    CONSTRAINT "ArtistInGenres_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE

);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_code_key" ON "Tag"("code");


-- Create View
CREATE VIEW "Artist_fj" AS 
    SELECT "id", "name", "popularity", "imageUrl" , "createdAt" , "updatedAt", "uid"
    FROM "Artist" NATURAL JOIN  "ArtistMeta"
;

-- Create View
CREATE VIEW "Album_fj" AS 
    SELECT "id" , "albumType" , "totalTracks" , "name" , "imageUrl" , "createdAt" , "updatedAt" , "uid" , "releaseDate" , "releaseDatePrecision" , "copyrights" 
    FROM "Album" NATURAL JOIN  "AlbumMeta"
;

-- Create View
CREATE VIEW "Track_fj" AS 
    SELECT "id" , "name" , "discNumber" , "popularity" , "trackNumber" , "albumId" , "createdAt" , "updatedAt" , "uid" , "previewUrl" , "durationMs" 
    FROM "Track" NATURAL JOIN  "TrackMeta"
;

-- Create View
CREATE VIEW "Playlist_fj" AS 
    SELECT "id", "name", "description", "public", "primaryColor", "imagesId", "createdAt", "updatedAt", "uid"
    FROM "Playlist" NATURAL JOIN  "PlaylistMeta"
;



CREATE VIEW v_track_row AS 
  SELECT 
    a."name", a."discNumber", a1."durationMs", a."popularity",  a."trackNumber", a."albumId",
    d."ArtistsInfo" 
  FROM "Track" a
  NATURAL JOIN "public"."TrackMeta" a1
  INNER JOIN (
    SELECT d1."trackId" , 
      JSON_AGG( JSON_BUILD_OBJECT( 'id',d2."id", 'name', d2."name", 'imageUrl',d2."imageUrl" )) AS "ArtistsInfo",
      COUNT(*) AS "ArtistsCount"
    FROM "public"."TrackProduceByArtist" d1
    INNER JOIN "public"."Artist" d2 ON d1."artistId" = d2."id"
    GROUP BY "trackId"
  ) d ON d."trackId" = a."id"
  ORDER BY "albumId" ,"discNumber",  "trackNumber" ASC;
;




CREATE VIEW v_artist_w_genre AS 
    SELECT a."name" ,a."popularity" ,a."imageUrl" ,b."genres"
    FROM  "public"."Artist" a
    INNER JOIN (
    SELECT 
        b1."artistId" , JSON_AGG(b2."name") AS "genres"
        FROM "public"."ArtistInGenres" b1
        INNER JOIN "public"."Tag" b2 ON b1."tagId" = b2."id"
        GROUP BY "artistId"
    ) b
    ON a."Id" = b."artistId"
;




