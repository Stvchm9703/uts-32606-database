import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerUpdateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUpdateWithoutUserInput.schema';
import { PlaylistOnFollowerUncheckedUpdateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedUpdateWithoutUserInput.schema';
import { PlaylistOnFollowerCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateWithoutUserInput.schema';
import { PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PlaylistOnFollowerUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => PlaylistOnFollowerUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PlaylistOnFollowerCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => PlaylistOnFollowerUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
