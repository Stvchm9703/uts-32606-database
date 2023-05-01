import { z } from 'zod';
import { ArtistDataMetaWhereUniqueInputObjectSchema } from './objects/ArtistDataMetaWhereUniqueInput.schema';
import { ArtistDataMetaCreateInputObjectSchema } from './objects/ArtistDataMetaCreateInput.schema';
import { ArtistDataMetaUncheckedCreateInputObjectSchema } from './objects/ArtistDataMetaUncheckedCreateInput.schema';
import { ArtistDataMetaUpdateInputObjectSchema } from './objects/ArtistDataMetaUpdateInput.schema';
import { ArtistDataMetaUncheckedUpdateInputObjectSchema } from './objects/ArtistDataMetaUncheckedUpdateInput.schema';

export const ArtistDataMetaUpsertSchema = z.object({
  where: ArtistDataMetaWhereUniqueInputObjectSchema,
  create: z.union([
    ArtistDataMetaCreateInputObjectSchema,
    ArtistDataMetaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArtistDataMetaUpdateInputObjectSchema,
    ArtistDataMetaUncheckedUpdateInputObjectSchema,
  ]),
});
