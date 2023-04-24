import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './objects/TrackWhereUniqueInput.schema';

export const TrackDeleteOneSchema = z.object({
  where: TrackWhereUniqueInputObjectSchema,
});
