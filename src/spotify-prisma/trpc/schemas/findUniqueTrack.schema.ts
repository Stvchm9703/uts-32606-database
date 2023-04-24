import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './objects/TrackWhereUniqueInput.schema';

export const TrackFindUniqueSchema = z.object({
  where: TrackWhereUniqueInputObjectSchema,
});
