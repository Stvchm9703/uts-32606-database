import { z } from 'zod';
import { AlbumProduceByArtistUpdateInputObjectSchema } from './objects/AlbumProduceByArtistUpdateInput.schema';
import { AlbumProduceByArtistUncheckedUpdateInputObjectSchema } from './objects/AlbumProduceByArtistUncheckedUpdateInput.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './objects/AlbumProduceByArtistWhereUniqueInput.schema';

export const AlbumProduceByArtistUpdateOneSchema = z.object({
  data: z.union([
    AlbumProduceByArtistUpdateInputObjectSchema,
    AlbumProduceByArtistUncheckedUpdateInputObjectSchema,
  ]),
  where: AlbumProduceByArtistWhereUniqueInputObjectSchema,
});
