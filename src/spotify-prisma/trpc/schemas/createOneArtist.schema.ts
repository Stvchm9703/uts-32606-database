import { z } from 'zod';
import { ArtistCreateInputObjectSchema } from './objects/ArtistCreateInput.schema';
import { ArtistUncheckedCreateInputObjectSchema } from './objects/ArtistUncheckedCreateInput.schema';

export const ArtistCreateOneSchema = z.object({
  data: z.union([
    ArtistCreateInputObjectSchema,
    ArtistUncheckedCreateInputObjectSchema,
  ]),
});
