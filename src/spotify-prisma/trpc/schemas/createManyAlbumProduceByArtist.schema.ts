import { z } from 'zod';
import { AlbumProduceByArtistCreateManyInputObjectSchema } from './objects/AlbumProduceByArtistCreateManyInput.schema';

export const AlbumProduceByArtistCreateManySchema = z.object({
  data: z.union([
    AlbumProduceByArtistCreateManyInputObjectSchema,
    z.array(AlbumProduceByArtistCreateManyInputObjectSchema),
  ]),
});
