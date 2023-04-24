import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingUpdateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUpdateWithoutArtistInput.schema';
import { ArtistOnFollowingUncheckedUpdateWithoutArtistInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistOnFollowingUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistOnFollowingUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
