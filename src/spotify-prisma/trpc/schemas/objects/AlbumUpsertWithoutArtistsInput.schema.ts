import { z } from 'zod';
import { AlbumUpdateWithoutArtistsInputObjectSchema } from './AlbumUpdateWithoutArtistsInput.schema';
import { AlbumUncheckedUpdateWithoutArtistsInputObjectSchema } from './AlbumUncheckedUpdateWithoutArtistsInput.schema';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpsertWithoutArtistsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutArtistsInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutArtistsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithoutArtistsInputObjectSchema = Schema;
