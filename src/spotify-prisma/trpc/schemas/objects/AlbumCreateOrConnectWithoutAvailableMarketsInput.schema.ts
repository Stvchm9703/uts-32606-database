import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateWithoutAvailableMarketsInput.schema';
import { AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumUncheckedCreateWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutAvailableMarketsInput> =
  z
    .object({
      where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AlbumCreateWithoutAvailableMarketsInputObjectSchema),
        z.lazy(
          () => AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumCreateOrConnectWithoutAvailableMarketsInputObjectSchema =
  Schema;
