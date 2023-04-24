import { z } from 'zod';
import { TrackCreateWithoutInPlaylistInputObjectSchema } from './TrackCreateWithoutInPlaylistInput.schema';
import { TrackUncheckedCreateWithoutInPlaylistInputObjectSchema } from './TrackUncheckedCreateWithoutInPlaylistInput.schema';
import { TrackCreateOrConnectWithoutInPlaylistInputObjectSchema } from './TrackCreateOrConnectWithoutInPlaylistInput.schema';
import { TrackUpsertWithoutInPlaylistInputObjectSchema } from './TrackUpsertWithoutInPlaylistInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackUpdateWithoutInPlaylistInputObjectSchema } from './TrackUpdateWithoutInPlaylistInput.schema';
import { TrackUncheckedUpdateWithoutInPlaylistInputObjectSchema } from './TrackUncheckedUpdateWithoutInPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateOneRequiredWithoutInPlaylistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrackCreateWithoutInPlaylistInputObjectSchema),
          z.lazy(() => TrackUncheckedCreateWithoutInPlaylistInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TrackCreateOrConnectWithoutInPlaylistInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TrackUpsertWithoutInPlaylistInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TrackWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TrackUpdateWithoutInPlaylistInputObjectSchema),
          z.lazy(() => TrackUncheckedUpdateWithoutInPlaylistInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TrackUpdateOneRequiredWithoutInPlaylistNestedInputObjectSchema =
  Schema;
