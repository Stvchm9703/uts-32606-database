import { z } from 'zod';
import { PlaylistOnFollowerWhereUniqueInputObjectSchema } from './PlaylistOnFollowerWhereUniqueInput.schema';
import { PlaylistOnFollowerUpdateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUpdateWithoutUserInput.schema';
import { PlaylistOnFollowerUncheckedUpdateWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PlaylistOnFollowerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PlaylistOnFollowerUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => PlaylistOnFollowerUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
