import { z } from 'zod';
import { TrackUpdateWithoutArtistsInputObjectSchema } from './TrackUpdateWithoutArtistsInput.schema';
import { TrackUncheckedUpdateWithoutArtistsInputObjectSchema } from './TrackUncheckedUpdateWithoutArtistsInput.schema';
import { TrackCreateWithoutArtistsInputObjectSchema } from './TrackCreateWithoutArtistsInput.schema';
import { TrackUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpsertWithoutArtistsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TrackUpdateWithoutArtistsInputObjectSchema),
      z.lazy(() => TrackUncheckedUpdateWithoutArtistsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TrackCreateWithoutArtistsInputObjectSchema),
      z.lazy(() => TrackUncheckedCreateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const TrackUpsertWithoutArtistsInputObjectSchema = Schema;
