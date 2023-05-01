import { z } from 'zod';
import { ArtistDataMetaOrderByWithRelationInputObjectSchema } from './objects/ArtistDataMetaOrderByWithRelationInput.schema';
import { ArtistDataMetaWhereInputObjectSchema } from './objects/ArtistDataMetaWhereInput.schema';
import { ArtistDataMetaWhereUniqueInputObjectSchema } from './objects/ArtistDataMetaWhereUniqueInput.schema';
import { ArtistDataMetaCountAggregateInputObjectSchema } from './objects/ArtistDataMetaCountAggregateInput.schema';
import { ArtistDataMetaMinAggregateInputObjectSchema } from './objects/ArtistDataMetaMinAggregateInput.schema';
import { ArtistDataMetaMaxAggregateInputObjectSchema } from './objects/ArtistDataMetaMaxAggregateInput.schema';
import { ArtistDataMetaAvgAggregateInputObjectSchema } from './objects/ArtistDataMetaAvgAggregateInput.schema';
import { ArtistDataMetaSumAggregateInputObjectSchema } from './objects/ArtistDataMetaSumAggregateInput.schema';

export const ArtistDataMetaAggregateSchema = z.object({
  orderBy: z
    .union([
      ArtistDataMetaOrderByWithRelationInputObjectSchema,
      ArtistDataMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistDataMetaWhereInputObjectSchema.optional(),
  cursor: ArtistDataMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArtistDataMetaCountAggregateInputObjectSchema])
    .optional(),
  _min: ArtistDataMetaMinAggregateInputObjectSchema.optional(),
  _max: ArtistDataMetaMaxAggregateInputObjectSchema.optional(),
  _avg: ArtistDataMetaAvgAggregateInputObjectSchema.optional(),
  _sum: ArtistDataMetaSumAggregateInputObjectSchema.optional(),
});
