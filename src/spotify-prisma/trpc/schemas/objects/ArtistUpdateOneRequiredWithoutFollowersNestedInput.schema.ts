import { z } from 'zod';
import { ArtistCreateWithoutFollowersInputObjectSchema } from './ArtistCreateWithoutFollowersInput.schema';
import { ArtistUncheckedCreateWithoutFollowersInputObjectSchema } from './ArtistUncheckedCreateWithoutFollowersInput.schema';
import { ArtistCreateOrConnectWithoutFollowersInputObjectSchema } from './ArtistCreateOrConnectWithoutFollowersInput.schema';
import { ArtistUpsertWithoutFollowersInputObjectSchema } from './ArtistUpsertWithoutFollowersInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutFollowersInputObjectSchema } from './ArtistUpdateWithoutFollowersInput.schema';
import { ArtistUncheckedUpdateWithoutFollowersInputObjectSchema } from './ArtistUncheckedUpdateWithoutFollowersInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpdateOneRequiredWithoutFollowersNestedInput> =
  z
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
      upsert: z
        .lazy(() => ArtistUpsertWithoutFollowersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArtistUpdateWithoutFollowersInputObjectSchema),
          z.lazy(() => ArtistUncheckedUpdateWithoutFollowersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ArtistUpdateOneRequiredWithoutFollowersNestedInputObjectSchema =
  Schema;
