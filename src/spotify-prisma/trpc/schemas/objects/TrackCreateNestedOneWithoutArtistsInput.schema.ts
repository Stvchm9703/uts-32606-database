import { z } from 'zod';
import { TrackCreateWithoutArtistsInputObjectSchema } from './TrackCreateWithoutArtistsInput.schema';
import { TrackUncheckedCreateWithoutArtistsInputObjectSchema } from './TrackUncheckedCreateWithoutArtistsInput.schema';
import { TrackCreateOrConnectWithoutArtistsInputObjectSchema } from './TrackCreateOrConnectWithoutArtistsInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateNestedOneWithoutArtistsInput> = z
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
    connect: z.lazy(() => TrackWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TrackCreateNestedOneWithoutArtistsInputObjectSchema = Schema;
