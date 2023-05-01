import { z } from 'zod';
import { TrackMetaUpdateInputObjectSchema } from './objects/TrackMetaUpdateInput.schema';
import { TrackMetaUncheckedUpdateInputObjectSchema } from './objects/TrackMetaUncheckedUpdateInput.schema';
import { TrackMetaWhereUniqueInputObjectSchema } from './objects/TrackMetaWhereUniqueInput.schema';

export const TrackMetaUpdateOneSchema = z.object({
  data: z.union([
    TrackMetaUpdateInputObjectSchema,
    TrackMetaUncheckedUpdateInputObjectSchema,
  ]),
  where: TrackMetaWhereUniqueInputObjectSchema,
});
