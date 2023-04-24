import { z } from 'zod';
import { AlbumCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateWithoutAvailableMarketsInput.schema';
import { AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumUncheckedCreateWithoutAvailableMarketsInput.schema';
import { AlbumCreateOrConnectWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateOrConnectWithoutAvailableMarketsInput.schema';
import { AlbumUpsertWithoutAvailableMarketsInputObjectSchema } from './AlbumUpsertWithoutAvailableMarketsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutAvailableMarketsInputObjectSchema } from './AlbumUpdateWithoutAvailableMarketsInput.schema';
import { AlbumUncheckedUpdateWithoutAvailableMarketsInputObjectSchema } from './AlbumUncheckedUpdateWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumCreateWithoutAvailableMarketsInputObjectSchema),
          z.lazy(
            () => AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => AlbumCreateOrConnectWithoutAvailableMarketsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => AlbumUpsertWithoutAvailableMarketsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AlbumUpdateWithoutAvailableMarketsInputObjectSchema),
          z.lazy(
            () => AlbumUncheckedUpdateWithoutAvailableMarketsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInputObjectSchema =
  Schema;
