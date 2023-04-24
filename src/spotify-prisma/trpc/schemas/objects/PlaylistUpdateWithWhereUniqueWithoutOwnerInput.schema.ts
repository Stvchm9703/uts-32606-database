import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistUpdateWithoutOwnerInputObjectSchema } from './PlaylistUpdateWithoutOwnerInput.schema';
import { PlaylistUncheckedUpdateWithoutOwnerInputObjectSchema } from './PlaylistUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpdateWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PlaylistUpdateWithoutOwnerInputObjectSchema),
        z.lazy(() => PlaylistUncheckedUpdateWithoutOwnerInputObjectSchema),
      ]),
    })
    .strict();

export const PlaylistUpdateWithWhereUniqueWithoutOwnerInputObjectSchema =
  Schema;
