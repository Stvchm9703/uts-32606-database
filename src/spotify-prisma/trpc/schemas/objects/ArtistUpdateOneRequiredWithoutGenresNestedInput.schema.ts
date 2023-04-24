import { z } from 'zod';
import { ArtistCreateWithoutGenresInputObjectSchema } from './ArtistCreateWithoutGenresInput.schema';
import { ArtistUncheckedCreateWithoutGenresInputObjectSchema } from './ArtistUncheckedCreateWithoutGenresInput.schema';
import { ArtistCreateOrConnectWithoutGenresInputObjectSchema } from './ArtistCreateOrConnectWithoutGenresInput.schema';
import { ArtistUpsertWithoutGenresInputObjectSchema } from './ArtistUpsertWithoutGenresInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutGenresInputObjectSchema } from './ArtistUpdateWithoutGenresInput.schema';
import { ArtistUncheckedUpdateWithoutGenresInputObjectSchema } from './ArtistUncheckedUpdateWithoutGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpdateOneRequiredWithoutGenresNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutGenresInputObjectSchema),
          z.lazy(() => ArtistUncheckedCreateWithoutGenresInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArtistCreateOrConnectWithoutGenresInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ArtistUpsertWithoutGenresInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArtistUpdateWithoutGenresInputObjectSchema),
          z.lazy(() => ArtistUncheckedUpdateWithoutGenresInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ArtistUpdateOneRequiredWithoutGenresNestedInputObjectSchema =
  Schema;
