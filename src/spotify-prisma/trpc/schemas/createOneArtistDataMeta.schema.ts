import { z } from 'zod';
import { ArtistDataMetaCreateInputObjectSchema } from './objects/ArtistDataMetaCreateInput.schema';
import { ArtistDataMetaUncheckedCreateInputObjectSchema } from './objects/ArtistDataMetaUncheckedCreateInput.schema';

export const ArtistDataMetaCreateOneSchema = z.object({
  data: z.union([
    ArtistDataMetaCreateInputObjectSchema,
    ArtistDataMetaUncheckedCreateInputObjectSchema,
  ]),
});
