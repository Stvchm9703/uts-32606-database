

INSERT INTO "public"."AlbumProduceByArtist" 
  ("artistId","albumId") 
VALUES ($1,$2) 
  ON CONFLICT DO NOTHING