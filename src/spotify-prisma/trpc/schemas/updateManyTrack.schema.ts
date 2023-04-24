import { z } from 'zod';
import { TrackUpdateManyMutationInputObjectSchema } from './objects/TrackUpdateManyMutationInput.schema';
import { TrackWhereInputObjectSchema } from './objects/TrackWhereInput.schema';

export const TrackUpdateManySchema = z.object({
  data: TrackUpdateManyMutationInputObjectSchema,
  where: TrackWhereInputObjectSchema.optional(),
});
