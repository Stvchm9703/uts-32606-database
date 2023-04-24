import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistCreateWithoutTracksInputObjectSchema } from './PlaylistCreateWithoutTracksInput.schema';
import { PlaylistUncheckedCreateWithoutTracksInputObjectSchema } from './PlaylistUncheckedCreateWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateOrConnectWithoutTracksInput> = z
  .object({
    where: z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PlaylistCreateWithoutTracksInputObjectSchema),
      z.lazy(() => PlaylistUncheckedCreateWithoutTracksInputObjectSchema),
    ]),
  })
  .strict();

export const PlaylistCreateOrConnectWithoutTracksInputObjectSchema = Schema;
