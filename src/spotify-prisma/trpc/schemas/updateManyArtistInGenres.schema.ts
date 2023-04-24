import { z } from 'zod';
import { ArtistInGenresUpdateManyMutationInputObjectSchema } from './objects/ArtistInGenresUpdateManyMutationInput.schema';
import { ArtistInGenresWhereInputObjectSchema } from './objects/ArtistInGenresWhereInput.schema';

export const ArtistInGenresUpdateManySchema = z.object({
  data: ArtistInGenresUpdateManyMutationInputObjectSchema,
  where: ArtistInGenresWhereInputObjectSchema.optional(),
});
