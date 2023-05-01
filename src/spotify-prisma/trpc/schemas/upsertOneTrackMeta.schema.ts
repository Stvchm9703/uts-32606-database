import { z } from 'zod';
import { TrackMetaWhereUniqueInputObjectSchema } from './objects/TrackMetaWhereUniqueInput.schema';
import { TrackMetaCreateInputObjectSchema } from './objects/TrackMetaCreateInput.schema';
import { TrackMetaUncheckedCreateInputObjectSchema } from './objects/TrackMetaUncheckedCreateInput.schema';
import { TrackMetaUpdateInputObjectSchema } from './objects/TrackMetaUpdateInput.schema';
import { TrackMetaUncheckedUpdateInputObjectSchema } from './objects/TrackMetaUncheckedUpdateInput.schema';

export const TrackMetaUpsertSchema = z.object({
  where: TrackMetaWhereUniqueInputObjectSchema,
  create: z.union([
    TrackMetaCreateInputObjectSchema,
    TrackMetaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TrackMetaUpdateInputObjectSchema,
    TrackMetaUncheckedUpdateInputObjectSchema,
  ]),
});
