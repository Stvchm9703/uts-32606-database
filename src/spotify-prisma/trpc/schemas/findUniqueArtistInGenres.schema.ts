import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './objects/ArtistInGenresWhereUniqueInput.schema';

export const ArtistInGenresFindUniqueSchema = z.object({
  where: ArtistInGenresWhereUniqueInputObjectSchema,
});
