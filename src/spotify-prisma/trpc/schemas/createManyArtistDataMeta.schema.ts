import { z } from 'zod';
import { ArtistDataMetaCreateManyInputObjectSchema } from './objects/ArtistDataMetaCreateManyInput.schema';

export const ArtistDataMetaCreateManySchema = z.object({
  data: z.union([
    ArtistDataMetaCreateManyInputObjectSchema,
    z.array(ArtistDataMetaCreateManyInputObjectSchema),
  ]),
});
