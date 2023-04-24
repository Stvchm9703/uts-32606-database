import { z } from 'zod';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistCreateWithoutOwnerInputObjectSchema } from './PlaylistCreateWithoutOwnerInput.schema';
import { PlaylistUncheckedCreateWithoutOwnerInputObjectSchema } from './PlaylistUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PlaylistCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => PlaylistUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const PlaylistCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
