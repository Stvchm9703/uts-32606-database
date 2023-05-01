import { z } from 'zod';
import { ArtistDataMetaWhereUniqueInputObjectSchema } from './objects/ArtistDataMetaWhereUniqueInput.schema';

export const ArtistDataMetaDeleteOneSchema = z.object({
  where: ArtistDataMetaWhereUniqueInputObjectSchema,
});
