import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistOnFollowingCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
