import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutFollowersInputObjectSchema } from './ArtistCreateWithoutFollowersInput.schema';
import { ArtistUncheckedCreateWithoutFollowersInputObjectSchema } from './ArtistUncheckedCreateWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutFollowersInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutFollowersInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutFollowersInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutFollowersInputObjectSchema = Schema;
