import { z } from 'zod';
import { TrackCreateInputObjectSchema } from './objects/TrackCreateInput.schema';
import { TrackUncheckedCreateInputObjectSchema } from './objects/TrackUncheckedCreateInput.schema';

export const TrackCreateOneSchema = z.object({
  data: z.union([
    TrackCreateInputObjectSchema,
    TrackUncheckedCreateInputObjectSchema,
  ]),
});
