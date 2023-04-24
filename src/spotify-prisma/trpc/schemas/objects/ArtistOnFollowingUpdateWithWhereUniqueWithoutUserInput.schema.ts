import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingUpdateWithoutUserInputObjectSchema } from './ArtistOnFollowingUpdateWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedUpdateWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistOnFollowingUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
