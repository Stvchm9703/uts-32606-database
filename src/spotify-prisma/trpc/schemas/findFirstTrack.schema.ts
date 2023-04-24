import { z } from 'zod';
import { TrackOrderByWithRelationInputObjectSchema } from './objects/TrackOrderByWithRelationInput.schema';
import { TrackWhereInputObjectSchema } from './objects/TrackWhereInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './objects/TrackWhereUniqueInput.schema';
import { TrackScalarFieldEnumSchema } from './enums/TrackScalarFieldEnum.schema';

export const TrackFindFirstSchema = z.object({
  orderBy: z
    .union([
      TrackOrderByWithRelationInputObjectSchema,
      TrackOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TrackWhereInputObjectSchema.optional(),
  cursor: TrackWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TrackScalarFieldEnumSchema).optional(),
});
