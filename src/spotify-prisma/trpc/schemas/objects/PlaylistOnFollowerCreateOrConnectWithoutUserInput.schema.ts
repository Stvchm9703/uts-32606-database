import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateWithoutUserInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PlaylistOnFollowerCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
