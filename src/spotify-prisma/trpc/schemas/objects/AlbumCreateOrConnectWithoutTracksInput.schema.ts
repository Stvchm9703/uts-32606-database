import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutTracksInputObjectSchema } from './AlbumCreateWithoutTracksInput.schema';
import { AlbumUncheckedCreateWithoutTracksInputObjectSchema } from './AlbumUncheckedCreateWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutTracksInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutTracksInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutTracksInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutTracksInputObjectSchema = Schema;
