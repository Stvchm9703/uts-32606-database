import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './objects/ArtistInGenresWhereUniqueInput.schema';

export const ArtistInGenresDeleteOneSchema = z.object({
  where: ArtistInGenresWhereUniqueInputObjectSchema,
});
