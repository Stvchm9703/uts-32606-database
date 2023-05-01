import { z } from 'zod';
import { TrackMetaOrderByWithRelationInputObjectSchema } from './objects/TrackMetaOrderByWithRelationInput.schema';
import { TrackMetaWhereInputObjectSchema } from './objects/TrackMetaWhereInput.schema';
import { TrackMetaWhereUniqueInputObjectSchema } from './objects/TrackMetaWhereUniqueInput.schema';
import { TrackMetaScalarFieldEnumSchema } from './enums/TrackMetaScalarFieldEnum.schema';

export const TrackMetaFindFirstSchema = z.object({
  orderBy: z
    .union([
      TrackMetaOrderByWithRelationInputObjectSchema,
      TrackMetaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TrackMetaWhereInputObjectSchema.optional(),
  cursor: TrackMetaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TrackMetaScalarFieldEnumSchema).optional(),
});
