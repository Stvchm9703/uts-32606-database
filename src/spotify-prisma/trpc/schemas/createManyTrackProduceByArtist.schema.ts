import { z } from 'zod';
import { TrackProduceByArtistCreateManyInputObjectSchema } from './objects/TrackProduceByArtistCreateManyInput.schema';

export const TrackProduceByArtistCreateManySchema = z.object({
  data: z.union([
    TrackProduceByArtistCreateManyInputObjectSchema,
    z.array(TrackProduceByArtistCreateManyInputObjectSchema),
  ]),
});
