import { z } from 'zod';
import { AlbumUpdateWithoutTracksInputObjectSchema } from './AlbumUpdateWithoutTracksInput.schema';
import { AlbumUncheckedUpdateWithoutTracksInputObjectSchema } from './AlbumUncheckedUpdateWithoutTracksInput.schema';
import { AlbumCreateWithoutTracksInputObjectSchema } from './AlbumCreateWithoutTracksInput.schema';
import { AlbumUncheckedCreateWithoutTracksInputObjectSchema } from './AlbumUncheckedCreateWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpsertWithoutTracksInput> = z
  .object({
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutTracksInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutTracksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutTracksInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutTracksInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithoutTracksInputObjectSchema = Schema;
