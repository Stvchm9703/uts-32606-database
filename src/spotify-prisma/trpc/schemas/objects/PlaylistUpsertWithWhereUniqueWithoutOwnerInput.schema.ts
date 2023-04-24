import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistUpdateWithoutOwnerInputObjectSchema } from './PlaylistUpdateWithoutOwnerInput.schema';
import { PlaylistUncheckedUpdateWithoutOwnerInputObjectSchema } from './PlaylistUncheckedUpdateWithoutOwnerInput.schema';
import { PlaylistCreateWithoutOwnerInputObjectSchema } from './PlaylistCreateWithoutOwnerInput.schema';
import { PlaylistUncheckedCreateWithoutOwnerInputObjectSchema } from './PlaylistUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpsertWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PlaylistUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => PlaylistUncheckedUpdateWithoutOwnerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PlaylistCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => PlaylistUncheckedCreateWithoutOwnerInputObjectSchema),
      ]),
    })
    .strict();

export const PlaylistUpsertWithWhereUniqueWithoutOwnerInputObjectSchema =
  Schema;
