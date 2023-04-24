import { z } from 'zod';
import { AlbumProduceByArtistWhereInputObjectSchema } from './objects/AlbumProduceByArtistWhereInput.schema';

export const AlbumProduceByArtistDeleteManySchema = z.object({
  where: AlbumProduceByArtistWhereInputObjectSchema.optional(),
});
