import { z } from 'zod';
import { AlbumProduceByArtistUpdateManyMutationInputObjectSchema } from './objects/AlbumProduceByArtistUpdateManyMutationInput.schema';
import { AlbumProduceByArtistWhereInputObjectSchema } from './objects/AlbumProduceByArtistWhereInput.schema';

export const AlbumProduceByArtistUpdateManySchema = z.object({
  data: AlbumProduceByArtistUpdateManyMutationInputObjectSchema,
  where: AlbumProduceByArtistWhereInputObjectSchema.optional(),
});
