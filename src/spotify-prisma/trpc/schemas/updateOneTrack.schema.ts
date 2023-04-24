import { z } from 'zod';
import { TrackUpdateInputObjectSchema } from './objects/TrackUpdateInput.schema';
import { TrackUncheckedUpdateInputObjectSchema } from './objects/TrackUncheckedUpdateInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './objects/TrackWhereUniqueInput.schema';

export const TrackUpdateOneSchema = z.object({
  data: z.union([
    TrackUpdateInputObjectSchema,
    TrackUncheckedUpdateInputObjectSchema,
  ]),
  where: TrackWhereUniqueInputObjectSchema,
});
