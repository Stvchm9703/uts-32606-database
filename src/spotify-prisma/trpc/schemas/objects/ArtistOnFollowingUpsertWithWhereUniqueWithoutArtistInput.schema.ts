import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingUpdateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUpdateWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedUpdateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateWithoutArtistInput.schema';
import { ArtistOnFollowingCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingCreateWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistOnFollowingUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ArtistOnFollowingCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
