import { z } from 'zod';
import { AlbumProduceByArtistCreateInputObjectSchema } from './objects/AlbumProduceByArtistCreateInput.schema';
import { AlbumProduceByArtistUncheckedCreateInputObjectSchema } from './objects/AlbumProduceByArtistUncheckedCreateInput.schema';

export const AlbumProduceByArtistCreateOneSchema = z.object({
  data: z.union([
    AlbumProduceByArtistCreateInputObjectSchema,
    AlbumProduceByArtistUncheckedCreateInputObjectSchema,
  ]),
});
