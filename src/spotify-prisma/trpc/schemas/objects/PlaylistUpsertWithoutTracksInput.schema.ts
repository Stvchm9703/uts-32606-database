import { z } from 'zod';
import { PlaylistUpdateWithoutTracksInputObjectSchema } from './PlaylistUpdateWithoutTracksInput.schema';
import { PlaylistUncheckedUpdateWithoutTracksInputObjectSchema } from './PlaylistUncheckedUpdateWithoutTracksInput.schema';
import { PlaylistCreateWithoutTracksInputObjectSchema } from './PlaylistCreateWithoutTracksInput.schema';
import { PlaylistUncheckedCreateWithoutTracksInputObjectSchema } from './PlaylistUncheckedCreateWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpsertWithoutTracksInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlaylistUpdateWithoutTracksInputObjectSchema),
      z.lazy(() => PlaylistUncheckedUpdateWithoutTracksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PlaylistCreateWithoutTracksInputObjectSchema),
      z.lazy(() => PlaylistUncheckedCreateWithoutTracksInputObjectSchema),
    ]),
  })
  .strict();

export const PlaylistUpsertWithoutTracksInputObjectSchema = Schema;
