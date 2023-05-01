import { z } from 'zod';
import { ArtistDataMetaWhereInputObjectSchema } from './objects/ArtistDataMetaWhereInput.schema';

export const ArtistDataMetaDeleteManySchema = z.object({
  where: ArtistDataMetaWhereInputObjectSchema.optional(),
});
