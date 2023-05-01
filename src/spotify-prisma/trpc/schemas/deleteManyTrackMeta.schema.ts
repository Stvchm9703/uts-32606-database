import { z } from 'zod';
import { TrackMetaWhereInputObjectSchema } from './objects/TrackMetaWhereInput.schema';

export const TrackMetaDeleteManySchema = z.object({
  where: TrackMetaWhereInputObjectSchema.optional(),
});
