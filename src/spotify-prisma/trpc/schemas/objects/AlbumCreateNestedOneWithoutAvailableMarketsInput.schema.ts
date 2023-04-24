import { z } from 'zod';
import { AlbumCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateWithoutAvailableMarketsInput.schema';
import { AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumUncheckedCreateWithoutAvailableMarketsInput.schema';
import { AlbumCreateOrConnectWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateOrConnectWithoutAvailableMarketsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateNestedOneWithoutAvailableMarketsInput> =
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
      connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const AlbumCreateNestedOneWithoutAvailableMarketsInputObjectSchema =
  Schema;
