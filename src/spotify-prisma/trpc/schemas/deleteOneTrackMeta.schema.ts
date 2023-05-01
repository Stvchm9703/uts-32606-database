import { z } from 'zod';
import { TrackMetaWhereUniqueInputObjectSchema } from './objects/TrackMetaWhereUniqueInput.schema';

export const TrackMetaDeleteOneSchema = z.object({
  where: TrackMetaWhereUniqueInputObjectSchema,
});
