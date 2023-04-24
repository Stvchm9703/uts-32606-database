import { z } from 'zod';
import { TrackWhereInputObjectSchema } from './objects/TrackWhereInput.schema';

export const TrackDeleteManySchema = z.object({
  where: TrackWhereInputObjectSchema.optional(),
});
