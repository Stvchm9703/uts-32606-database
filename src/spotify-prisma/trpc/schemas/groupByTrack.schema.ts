import { z } from 'zod';
import { TrackWhereInputObjectSchema } from './objects/TrackWhereInput.schema';
import { TrackOrderByWithAggregationInputObjectSchema } from './objects/TrackOrderByWithAggregationInput.schema';
import { TrackScalarWhereWithAggregatesInputObjectSchema } from './objects/TrackScalarWhereWithAggregatesInput.schema';
import { TrackScalarFieldEnumSchema } from './enums/TrackScalarFieldEnum.schema';

export const TrackGroupBySchema = z.object({
  where: TrackWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TrackOrderByWithAggregationInputObjectSchema,
      TrackOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TrackScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TrackScalarFieldEnumSchema),
});
