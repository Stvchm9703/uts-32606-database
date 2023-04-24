import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateOrConnectWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistOnFollowingCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingCreateOrConnectWithoutArtistInputObjectSchema =
  Schema;
