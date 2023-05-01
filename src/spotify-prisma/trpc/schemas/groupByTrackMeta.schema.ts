import { z } from 'zod';
import { TrackMetaWhereInputObjectSchema } from './objects/TrackMetaWhereInput.schema';
import { TrackMetaOrderByWithAggregationInputObjectSchema } from './objects/TrackMetaOrderByWithAggregationInput.schema';
import { TrackMetaScalarWhereWithAggregatesInputObjectSchema } from './objects/TrackMetaScalarWhereWithAggregatesInput.schema';
import { TrackMetaScalarFieldEnumSchema } from './enums/TrackMetaScalarFieldEnum.schema';

export const TrackMetaGroupBySchema = z.object({
  where: TrackMetaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TrackMetaOrderByWithAggregationInputObjectSchema,
      TrackMetaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TrackMetaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TrackMetaScalarFieldEnumSchema),
});
