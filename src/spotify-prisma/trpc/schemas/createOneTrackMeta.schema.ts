import { z } from 'zod';
import { TrackMetaCreateInputObjectSchema } from './objects/TrackMetaCreateInput.schema';
import { TrackMetaUncheckedCreateInputObjectSchema } from './objects/TrackMetaUncheckedCreateInput.schema';

export const TrackMetaCreateOneSchema = z.object({
  data: z.union([
    TrackMetaCreateInputObjectSchema,
    TrackMetaUncheckedCreateInputObjectSchema,
  ]),
});
