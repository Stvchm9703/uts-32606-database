import { z } from 'zod';
import { TrackCreateManyInputObjectSchema } from './objects/TrackCreateManyInput.schema';

export const TrackCreateManySchema = z.object({
  data: z.union([
    TrackCreateManyInputObjectSchema,
    z.array(TrackCreateManyInputObjectSchema),
  ]),
});
