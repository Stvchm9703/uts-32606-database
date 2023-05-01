-- view : ablum detail
SELECT 
    b.name AS "artistName",
    b."imageUrl" AS "artistImageUrl",
    a.name AS "albumName", 
    a."albumType" ,
    a."totalTracks" ,
    a."releaseDate" ,
    a."releaseDatePrecision" ,
    a."albumGroup" ,
    a."copyrights" ,
    a."imageUrl" 
  FROM "public"."Album" a
  INNER JOIN "public"."AlbumProduceByArtist" c ON a.id = c."albumId"
  INNER JOIN "public"."Artist" b ON b.id = c."artistId"
  WHERE b.id = 1
  ORDER BY "releaseDate" DESC
  LIMIT 100
;


-- view 


SELECT 
    b.name AS "trackName",
    b."discNumber",	
    b."durationMs", 
    b."explicit",	
    b."popularity",	
    b."previewUrl",	
    b."trackNumber", 
    b."isLocal", 
    b."albumId",
    a.name AS "albumName", 
    a."albumType" ,
    a."totalTracks" ,
    a."imageUrl" 
  
  FROM "public"."Album" a
  INNER JOIN "public"."Track" b ON b."albumId" = a.id
  WHERE b."albumId" = 15
  ORDER BY "albumId" ,"discNumber",  "trackNumber"
  LIMIT 100
;

SELECT "name"	,"albumType", "totalTracks",	"releaseDate",	"albumGroup",	"imageUrl" 
  FROM "public"."Album" ORDER BY "releaseDate" DESC LIMIT 100;


SELECT  a1."tagId" , a1."totalArtist", b."name"
FROM (
  SELECT 
    a."tagId" ,
    COUNT(*) AS "totalArtist"
    FROM "public"."ArtistInGenres" a
    GROUP BY "tagId"
  ) a1 
INNER JOIN "public"."Tag" b ON a1."tagId" = b."id"
ORDER BY  "totalArtist" DESC
--  ---
SELECT a."name"
  ,a."popularity"
  ,a."imageUrl"
  ,b."genres"
FROM  "public"."Artist" a
INNER JOIN (
  SELECT 
    b1."artistId" , JSON_AGG(b2."name") AS "artistGenres"
    FROM "public"."ArtistInGenres" b1
    INNER JOIN "public"."Tag" b2 ON b1."tagId" = b2."id"
    GROUP BY "artistId"
) b
ON a."Id" = b."artistId"
-- ---


SELECT 
  a."name", a."discNumber", a1."durationMs", a."popularity", a1."previewUrl", a."trackNumber", a."albumId",
  b."name" AS "albumName" ,  b."albumType" , b."totalTracks" ,
  d."ArtistsInfo" , d."ArtistsCount"
  FROM "public"."Track" a
  NATURAL JOIN "public"."TrackMeta" a1
  INNER JOIN "public"."Album" b ON a."albumId" = b."id"
  INNER JOIN (
    SELECT d1."trackId" , 
      JSON_AGG( JSON_BUILD_OBJECT( 'id',d2."id", 'name', d2."name", 'imageUrl',d2."imageUrl" )) AS "ArtistsInfo",
      COUNT(*) AS "ArtistsCount"
    FROM "public"."TrackProduceByArtist" d1
    INNER JOIN "public"."Artist" d2 ON d1."artistId" = d2."id"
    GROUP BY "trackId"
  ) d ON d."trackId" = a."id"
  ORDER BY "ArtistsCount" DESC
  LIMIT 100;



-- --- 
ALTER TABLE "TracksAvailableMarket"
  ADD CONSTRAINT market_id_check CHECK( 
    "tagId" IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184)
  ) 



-- INSERT INTO "public"."Track" ("createdAt","updatedAt","uid","name","discNumber","durationMs","explicit","popularity","previewUrl","trackNumber","isLocal","albumId") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING "public"."Track"."id"',
--   '["2023-04-26 04:05:15.823 UTC","2023-04-26 04:05:15.823 UTC","7pkT9dWDGsTJ4FUn8fm2He","Lorelei",1,272906,false,0,"https://p.scdn.co/mp3-preview/90537e8979c00ad462d37d4f354fa5b146dfcdd3?cid=ad404a1109eb4d86abc42b58bf23b924",7,false,1334]'


CREATE VIEW v_track_row AS 
  SELECT 
    a."name", a."discNumber", a1."durationMs", a."popularity",  a."trackNumber", a."albumId",
    d."ArtistsInfo" 
  FROM "Track" a
  NATURAL JOIN "public"."TrackMeta" a1
  INNER JOIN (
    SELECT d1."trackId" , 
      JSON_AGG( JSON_BUILD_OBJECT( 'id',d2."id", 'name', d2."name", 'imageUrl',d2."imageUrl" )) AS "ArtistsInfo",
      COUNT(*) AS "ArtistsCount",
    FROM "public"."TrackProduceByArtist" d1
    INNER JOIN "public"."Artist" d2 ON d1."artistId" = d2."id"
    GROUP BY "trackId"
  ) d ON d."trackId" = a."id"

  ORDER BY "albumId" ,"discNumber",  "trackNumber" ASC;


CREATE VIEW v_artist_w_genres AS 
  SELECT 
    a.*, 
    STRING_AGG ( b.name , ',' ) as genres_list

  FROM "Artist" a
  INNER JOIN "ArtistInGenres" z on a.id = z."artistId" 
  INNER JOIN "Tag" b on b.id = z."tagId"
  GROUP BY a.id;

  
