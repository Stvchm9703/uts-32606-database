import { z } from 'zod';
import { ArtistOnFollowingScalarWhereInputObjectSchema } from './ArtistOnFollowingScalarWhereInput.schema';
import { ArtistOnFollowingUpdateManyMutationInputObjectSchema } from './ArtistOnFollowingUpdateManyMutationInput.schema';
import { ArtistOnFollowingUncheckedUpdateManyWithoutFollowingArtistsInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateManyWithoutFollowingArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistOnFollowingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ArtistOnFollowingUncheckedUpdateManyWithoutFollowingArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
