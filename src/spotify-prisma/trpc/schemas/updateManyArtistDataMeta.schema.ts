import { z } from 'zod';
import { ArtistDataMetaUpdateManyMutationInputObjectSchema } from './objects/ArtistDataMetaUpdateManyMutationInput.schema';
import { ArtistDataMetaWhereInputObjectSchema } from './objects/ArtistDataMetaWhereInput.schema';

export const ArtistDataMetaUpdateManySchema = z.object({
  data: ArtistDataMetaUpdateManyMutationInputObjectSchema,
  where: ArtistDataMetaWhereInputObjectSchema.optional(),
});
