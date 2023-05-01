import { z } from 'zod';
import { TrackMetaCreateManyInputObjectSchema } from './objects/TrackMetaCreateManyInput.schema';

export const TrackMetaCreateManySchema = z.object({
  data: z.union([
    TrackMetaCreateManyInputObjectSchema,
    z.array(TrackMetaCreateManyInputObjectSchema),
  ]),
});
