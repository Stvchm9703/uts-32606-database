import { z } from 'zod';
import { TrackProduceByArtistCreateInputObjectSchema } from './objects/TrackProduceByArtistCreateInput.schema';
import { TrackProduceByArtistUncheckedCreateInputObjectSchema } from './objects/TrackProduceByArtistUncheckedCreateInput.schema';

export const TrackProduceByArtistCreateOneSchema = z.object({
  data: z.union([
    TrackProduceByArtistCreateInputObjectSchema,
    TrackProduceByArtistUncheckedCreateInputObjectSchema,
  ]),
});
