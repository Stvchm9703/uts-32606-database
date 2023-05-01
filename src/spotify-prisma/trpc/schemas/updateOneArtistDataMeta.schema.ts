import { z } from 'zod';
import { ArtistDataMetaUpdateInputObjectSchema } from './objects/ArtistDataMetaUpdateInput.schema';
import { ArtistDataMetaUncheckedUpdateInputObjectSchema } from './objects/ArtistDataMetaUncheckedUpdateInput.schema';
import { ArtistDataMetaWhereUniqueInputObjectSchema } from './objects/ArtistDataMetaWhereUniqueInput.schema';

export const ArtistDataMetaUpdateOneSchema = z.object({
  data: z.union([
    ArtistDataMetaUpdateInputObjectSchema,
    ArtistDataMetaUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistDataMetaWhereUniqueInputObjectSchema,
});
