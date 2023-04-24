import { z } from 'zod';
import { TrackCreateNestedOneWithoutArtistsInputObjectSchema } from './TrackCreateNestedOneWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistCreateWithoutArtistsInput> =
  z
    .object({
      Track: z.lazy(() => TrackCreateNestedOneWithoutArtistsInputObjectSchema),
    })
    .strict();

export const TrackProduceByArtistCreateWithoutArtistsInputObjectSchema = Schema;
