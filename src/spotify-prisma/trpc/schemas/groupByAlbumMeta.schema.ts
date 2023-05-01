import { z } from 'zod';
import { AlbumMetaWhereInputObjectSchema } from './objects/AlbumMetaWhereInput.schema';
import { AlbumMetaOrderByWithAggregationInputObjectSchema } from './objects/AlbumMetaOrderByWithAggregationInput.schema';
import { AlbumMetaScalarWhereWithAggregatesInputObjectSchema } from './objects/AlbumMetaScalarWhereWithAggregatesInput.schema';
import { AlbumMetaScalarFieldEnumSchema } from './enums/AlbumMetaScalarFieldEnum.schema';

export const AlbumMetaGroupBySchema = z.object({
  where: AlbumMetaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AlbumMetaOrderByWithAggregationInputObjectSchema,
      AlbumMetaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AlbumMetaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AlbumMetaScalarFieldEnumSchema),
});
