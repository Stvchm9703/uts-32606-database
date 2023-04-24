import { z } from 'zod';
import { TrackCreateWithoutArtistsInputObjectSchema } from './TrackCreateWithoutArtistsInput.schema';
import { TrackUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackUncheckedCreateWithoutArtistsInput.schema';
import { TrackCreateOrConnectWithoutArtistsInputObjectSchema } from './TrackCreateOrConnectWithoutArtistsInput.schema';
import { TrackUpsertWithoutArtistsInputObjectSchema } from './TrackUpsertWithoutArtistsInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackUpdateWithoutArtistsInputObjectSchema } from './TrackUpdateWithoutArtistsInput.schema';
import { TrackUncheckedUpdateWithoutArtistsInputObjectSchema } from './TrackUncheckedUpdateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateOneRequiredWithoutArtistsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrackCreateWithoutArtistsInputObjectSchema),
          z.lazy(() => TrackUncheckedCreateWithoutArtistsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TrackCreateOrConnectWithoutArtistsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TrackUpsertWithoutArtistsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TrackWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TrackUpdateWithoutArtistsInputObjectSchema),
          z.lazy(() => TrackUncheckedUpdateWithoutArtistsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TrackUpdateOneRequiredWithoutArtistsNestedInputObjectSchema =
  Schema;
