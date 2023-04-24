import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackCreateWithoutArtistsInputObjectSchema } from './TrackCreateWithoutArtistsInput.schema';
import { TrackUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateOrConnectWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => TrackWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TrackCreateWithoutArtistsInputObjectSchema),
      z.lazy(() => TrackUncheckedCreateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const TrackCreateOrConnectWithoutArtistsInputObjectSchema = Schema;
