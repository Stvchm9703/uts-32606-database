import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './objects/AlbumProduceByArtistWhereUniqueInput.schema';

export const AlbumProduceByArtistFindUniqueSchema = z.object({
  where: AlbumProduceByArtistWhereUniqueInputObjectSchema,
});
