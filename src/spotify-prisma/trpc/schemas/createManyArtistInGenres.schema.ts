import { z } from 'zod';
import { ArtistInGenresCreateManyInputObjectSchema } from './objects/ArtistInGenresCreateManyInput.schema';

export const ArtistInGenresCreateManySchema = z.object({
  data: z.union([
    ArtistInGenresCreateManyInputObjectSchema,
    z.array(ArtistInGenresCreateManyInputObjectSchema),
  ]),
});
