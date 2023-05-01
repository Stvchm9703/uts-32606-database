import { z } from 'zod';
import { TrackMetaUpdateManyMutationInputObjectSchema } from './objects/TrackMetaUpdateManyMutationInput.schema';
import { TrackMetaWhereInputObjectSchema } from './objects/TrackMetaWhereInput.schema';

export const TrackMetaUpdateManySchema = z.object({
  data: TrackMetaUpdateManyMutationInputObjectSchema,
  where: TrackMetaWhereInputObjectSchema.optional(),
});
