import { z } from 'zod';
import { ArtistInGenresWhereInputObjectSchema } from './objects/ArtistInGenresWhereInput.schema';

export const ArtistInGenresDeleteManySchema = z.object({
  where: ArtistInGenresWhereInputObjectSchema.optional(),
});
