import { z } from 'zod';
import { ArtistCreateWithoutFollowersInputObjectSchema } from './ArtistCreateWithoutFollowersInput.schema';
import { ArtistUncheckedCreateWithoutFollowersInputObjectSchema } from './ArtistUncheckedCreateWithoutFollowersInput.schema';
import { ArtistCreateOrConnectWithoutFollowersInputObjectSchema } from './ArtistCreateOrConnectWithoutFollowersInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutFollowersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutFollowersInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutFollowersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutFollowersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtistCreateNestedOneWithoutFollowersInputObjectSchema = Schema;
