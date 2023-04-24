import { z } from 'zod';
import { PlaylistCreateWithoutTracksInputObjectSchema } from './PlaylistCreateWithoutTracksInput.schema';
import { PlaylistUncheckedCreateWithoutTracksInputObjectSchema } from './PlaylistUncheckedCreateWithoutTracksInput.schema';
import { PlaylistCreateOrConnectWithoutTracksInputObjectSchema } from './PlaylistCreateOrConnectWithoutTracksInput.schema';
import { PlaylistUpsertWithoutTracksInputObjectSchema } from './PlaylistUpsertWithoutTracksInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistUpdateWithoutTracksInputObjectSchema } from './PlaylistUpdateWithoutTracksInput.schema';
import { PlaylistUncheckedUpdateWithoutTracksInputObjectSchema } from './PlaylistUncheckedUpdateWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpdateOneRequiredWithoutTracksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlaylistCreateWithoutTracksInputObjectSchema),
          z.lazy(() => PlaylistUncheckedCreateWithoutTracksInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PlaylistCreateOrConnectWithoutTracksInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PlaylistUpsertWithoutTracksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PlaylistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlaylistUpdateWithoutTracksInputObjectSchema),
          z.lazy(() => PlaylistUncheckedUpdateWithoutTracksInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PlaylistUpdateOneRequiredWithoutTracksNestedInputObjectSchema =
  Schema;
