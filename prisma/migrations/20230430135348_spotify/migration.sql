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

-- CreateTable
CREATE TABLE "ArtistDataMeta" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT NOT NULL,

    CONSTRAINT "ArtistDataMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "discNumber" INTEGER NOT NULL,
    "popularity" INTEGER,
    "previewUrl" TEXT,
    "trackNumber" INTEGER NOT NULL,
    "albumId" INTEGER,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackMeta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT NOT NULL,
    "durationMs" INTEGER NOT NULL,

    CONSTRAINT "TrackMeta_pkey" PRIMARY KEY ("id")
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

    CONSTRAINT "AlbumMeta_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "PlaylistMeta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT,

    CONSTRAINT "PlaylistMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TracksOnPlaylist" (
    "playlistId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    CONSTRAINT "TracksOnPlaylist_pkey" PRIMARY KEY ("playlistId","trackId")
);

-- CreateTable
CREATE TABLE "TracksAvailableMarket" (
    "tagId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,

    CONSTRAINT "TracksAvailableMarket_pkey" PRIMARY KEY ("trackId","tagId")
);

-- CreateTable
CREATE TABLE "TrackProduceByArtist" (
    "trackId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "TrackProduceByArtist_pkey" PRIMARY KEY ("trackId","artistId")
);

-- CreateTable
CREATE TABLE "AlbumProduceByArtist" (
    "albumId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "AlbumProduceByArtist_pkey" PRIMARY KEY ("albumId","artistId")
);

-- CreateTable
CREATE TABLE "AlbumAvailableMarket" (
    "albumId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "AlbumAvailableMarket_pkey" PRIMARY KEY ("albumId","tagId")
);

-- CreateTable
CREATE TABLE "ArtistInGenres" (
    "artistId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "ArtistInGenres_pkey" PRIMARY KEY ("artistId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_code_key" ON "Tag"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_id_key" ON "Artist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistDataMeta_id_key" ON "ArtistDataMeta"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistDataMeta_uid_key" ON "ArtistDataMeta"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "TrackMeta_uid_key" ON "TrackMeta"("uid");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TracksOnPlaylist" ADD CONSTRAINT "TracksOnPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TracksOnPlaylist" ADD CONSTRAINT "TracksOnPlaylist_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TracksAvailableMarket" ADD CONSTRAINT "TracksAvailableMarket_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TracksAvailableMarket" ADD CONSTRAINT "TracksAvailableMarket_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackProduceByArtist" ADD CONSTRAINT "TrackProduceByArtist_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackProduceByArtist" ADD CONSTRAINT "TrackProduceByArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumProduceByArtist" ADD CONSTRAINT "AlbumProduceByArtist_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumProduceByArtist" ADD CONSTRAINT "AlbumProduceByArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumAvailableMarket" ADD CONSTRAINT "AlbumAvailableMarket_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumAvailableMarket" ADD CONSTRAINT "AlbumAvailableMarket_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistInGenres" ADD CONSTRAINT "ArtistInGenres_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistInGenres" ADD CONSTRAINT "ArtistInGenres_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
