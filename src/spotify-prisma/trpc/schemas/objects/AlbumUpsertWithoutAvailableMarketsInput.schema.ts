import { z } from 'zod';
import { AlbumUpdateWithoutAvailableMarketsInputObjectSchema } from './AlbumUpdateWithoutAvailableMarketsInput.schema';
import { AlbumUncheckedUpdateWithoutAvailableMarketsInputObjectSchema } from './AlbumUncheckedUpdateWithoutAvailableMarketsInput.schema';
import { AlbumCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumCreateWithoutAvailableMarketsInput.schema';
import { AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema } from './AlbumUncheckedCreateWithoutAvailableMarketsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpsertWithoutAvailableMarketsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutAvailableMarketsInputObjectSchema),
      z.lazy(
        () => AlbumUncheckedUpdateWithoutAvailableMarketsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutAvailableMarketsInputObjectSchema),
      z.lazy(
        () => AlbumUncheckedCreateWithoutAvailableMarketsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const AlbumUpsertWithoutAvailableMarketsInputObjectSchema = Schema;
