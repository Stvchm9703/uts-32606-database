import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingUpdateWithoutUserInputObjectSchema } from './ArtistOnFollowingUpdateWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedUpdateWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateWithoutUserInput.schema';
import { ArtistOnFollowingCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistOnFollowingUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ArtistOnFollowingCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
