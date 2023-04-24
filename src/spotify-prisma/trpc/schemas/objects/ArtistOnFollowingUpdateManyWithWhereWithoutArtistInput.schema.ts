import { z } from 'zod';
import { ArtistOnFollowingScalarWhereInputObjectSchema } from './ArtistOnFollowingScalarWhereInput.schema';
import { ArtistOnFollowingUpdateManyMutationInputObjectSchema } from './ArtistOnFollowingUpdateManyMutationInput.schema';
import { ArtistOnFollowingUncheckedUpdateManyWithoutFollowersInputObjectSchema } from './ArtistOnFollowingUncheckedUpdateManyWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistOnFollowingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ArtistOnFollowingUncheckedUpdateManyWithoutFollowersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistOnFollowingUpdateManyWithWhereWithoutArtistInputObjectSchema =
  Schema;
