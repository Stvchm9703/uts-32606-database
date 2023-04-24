import { z } from 'zod';
import { TrackUpdateWithoutInPlaylistInputObjectSchema } from './TrackUpdateWithoutInPlaylistInput.schema';
import { TrackUncheckedUpdateWithoutInPlaylistInputObjectSchema } from './TrackUncheckedUpdateWithoutInPlaylistInput.schema';
import { TrackCreateWithoutInPlaylistInputObjectSchema } from './TrackCreateWithoutInPlaylistInput.schema';
import { TrackUncheckedCreateWithoutInPlaylistInputObjectSchema } from './TrackUncheckedCreateWithoutInPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpsertWithoutInPlaylistInput> = z
  .object({
    update: z.union([
      z.lazy(() => TrackUpdateWithoutInPlaylistInputObjectSchema),
      z.lazy(() => TrackUncheckedUpdateWithoutInPlaylistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TrackCreateWithoutInPlaylistInputObjectSchema),
      z.lazy(() => TrackUncheckedCreateWithoutInPlaylistInputObjectSchema),
    ]),
  })
  .strict();

export const TrackUpsertWithoutInPlaylistInputObjectSchema = Schema;
