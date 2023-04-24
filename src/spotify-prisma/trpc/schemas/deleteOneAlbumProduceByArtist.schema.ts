import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './objects/AlbumProduceByArtistWhereUniqueInput.schema';

export const AlbumProduceByArtistDeleteOneSchema = z.object({
  where: AlbumProduceByArtistWhereUniqueInputObjectSchema,
});
