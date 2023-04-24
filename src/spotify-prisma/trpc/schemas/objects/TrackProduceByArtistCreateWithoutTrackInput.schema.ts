import { z } from 'zod';
import { ArtistCreateNestedOneWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateNestedOneWithoutTrackProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateWithoutTrackInput> = z
  .object({
    Artists: z.lazy(
      () => ArtistCreateNestedOneWithoutTrackProduceByArtistInputObjectSchema,
    ),
  })
  .strict();

export const TrackProduceByArtistCreateWithoutTrackInputObjectSchema = Schema;
