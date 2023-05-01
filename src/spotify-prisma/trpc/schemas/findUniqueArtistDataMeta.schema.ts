import { z } from 'zod';
import { ArtistDataMetaWhereUniqueInputObjectSchema } from './objects/ArtistDataMetaWhereUniqueInput.schema';

export const ArtistDataMetaFindUniqueSchema = z.object({
  where: ArtistDataMetaWhereUniqueInputObjectSchema,
});
