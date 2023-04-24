import { z } from 'zod';
import { PlaylistCreateWithoutTracksInputObjectSchema } from './PlaylistCreateWithoutTracksInput.schema';
import { PlaylistUncheckedCreateWithoutTracksInputObjectSchema } from './PlaylistUncheckedCreateWithoutTracksInput.schema';
import { PlaylistCreateOrConnectWithoutTracksInputObjectSchema } from './PlaylistCreateOrConnectWithoutTracksInput.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateNestedOneWithoutTracksInput> = z
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
    connect: z.lazy(() => PlaylistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistCreateNestedOneWithoutTracksInputObjectSchema = Schema;
