import { z } from 'zod';
import { AlbumMetaOrderByWithRelationInputObjectSchema } from './objects/AlbumMetaOrderByWithRelationInput.schema';
import { AlbumMetaWhereInputObjectSchema } from './objects/AlbumMetaWhereInput.schema';
import { AlbumMetaWhereUniqueInputObjectSchema } from './objects/AlbumMetaWhereUniqueInput.schema';
import { AlbumMetaCountAggregateInputObjectSchema } from './objects/AlbumMetaCountAggregateInput.schema';
import { AlbumMetaMinAggregateInputObjectSchema } from './objects/AlbumMetaMinAggregateInput.schema';
import { AlbumMetaMaxAggregateInputObjectSchema } from './objects/AlbumMetaMaxAggregateInput.schema';
import { AlbumMetaAvgAggregateInputObjectSchema } from './objects/AlbumMetaAvgAggregateInput.schema';
import { AlbumMetaSumAggregateInputObjectSchema } from './objects/AlbumMetaSumAggregateInput.schema';

export const AlbumMetaAggregateSchema = z.object({
  orderBy: z
    .union([
      AlbumMetaOrderByWithRelationInputObjectSchema,
      AlbumMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumMetaWhereInputObjectSchema.optional(),
  cursor: AlbumMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AlbumMetaCountAggregateInputObjectSchema])
    .optional(),
  _min: AlbumMetaMinAggregateInputObjectSchema.optional(),
  _max: AlbumMetaMaxAggregateInputObjectSchema.optional(),
  _avg: AlbumMetaAvgAggregateInputObjectSchema.optional(),
  _sum: AlbumMetaSumAggregateInputObjectSchema.optional(),
});
