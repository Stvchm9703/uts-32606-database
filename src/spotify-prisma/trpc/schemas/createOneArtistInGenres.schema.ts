import { z } from 'zod';
import { ArtistInGenresCreateInputObjectSchema } from './objects/ArtistInGenresCreateInput.schema';
import { ArtistInGenresUncheckedCreateInputObjectSchema } from './objects/ArtistInGenresUncheckedCreateInput.schema';

export const ArtistInGenresCreateOneSchema = z.object({
  data: z.union([
    ArtistInGenresCreateInputObjectSchema,
    ArtistInGenresUncheckedCreateInputObjectSchema,
  ]),
});
