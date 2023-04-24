import { z } from 'zod';
import { ArtistUpdateWithoutFollowersInputObjectSchema } from './ArtistUpdateWithoutFollowersInput.schema';
import { ArtistUncheckedUpdateWithoutFollowersInputObjectSchema } from './ArtistUncheckedUpdateWithoutFollowersInput.schema';
import { ArtistCreateWithoutFollowersInputObjectSchema } from './ArtistCreateWithoutFollowersInput.schema';
import { ArtistUncheckedCreateWithoutFollowersInputObjectSchema } from './ArtistUncheckedCreateWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutFollowersInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutFollowersInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutFollowersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutFollowersInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutFollowersInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutFollowersInputObjectSchema = Schema;
