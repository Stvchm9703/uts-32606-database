import { z } from 'zod';
import { TrackMetaWhereUniqueInputObjectSchema } from './objects/TrackMetaWhereUniqueInput.schema';

export const TrackMetaFindUniqueSchema = z.object({
  where: TrackMetaWhereUniqueInputObjectSchema,
});
