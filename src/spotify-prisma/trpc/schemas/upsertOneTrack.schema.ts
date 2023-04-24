import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './objects/TrackWhereUniqueInput.schema';
import { TrackCreateInputObjectSchema } from './objects/TrackCreateInput.schema';
import { TrackUncheckedCreateInputObjectSchema } from './objects/TrackUncheckedCreateInput.schema';
import { TrackUpdateInputObjectSchema } from './objects/TrackUpdateInput.schema';
import { TrackUncheckedUpdateInputObjectSchema } from './objects/TrackUncheckedUpdateInput.schema';

export const TrackUpsertSchema = z.object({
  where: TrackWhereUniqueInputObjectSchema,
  create: z.union([
    TrackCreateInputObjectSchema,
    TrackUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TrackUpdateInputObjectSchema,
    TrackUncheckedUpdateInputObjectSchema,
  ]),
});
