import { z } from 'zod';
import { ArtistDataMetaWhereInputObjectSchema } from './objects/ArtistDataMetaWhereInput.schema';
import { ArtistDataMetaOrderByWithAggregationInputObjectSchema } from './objects/ArtistDataMetaOrderByWithAggregationInput.schema';
import { ArtistDataMetaScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtistDataMetaScalarWhereWithAggregatesInput.schema';
import { ArtistDataMetaScalarFieldEnumSchema } from './enums/ArtistDataMetaScalarFieldEnum.schema';

export const ArtistDataMetaGroupBySchema = z.object({
  where: ArtistDataMetaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtistDataMetaOrderByWithAggregationInputObjectSchema,
      ArtistDataMetaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtistDataMetaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtistDataMetaScalarFieldEnumSchema),
});
