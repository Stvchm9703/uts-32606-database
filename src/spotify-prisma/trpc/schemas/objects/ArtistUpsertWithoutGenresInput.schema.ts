import { z } from 'zod';
import { ArtistUpdateWithoutGenresInputObjectSchema } from './ArtistUpdateWithoutGenresInput.schema';
import { ArtistUncheckedUpdateWithoutGenresInputObjectSchema } from './ArtistUncheckedUpdateWithoutGenresInput.schema';
import { ArtistCreateWithoutGenresInputObjectSchema } from './ArtistCreateWithoutGenresInput.schema';
import { ArtistUncheckedCreateWithoutGenresInputObjectSchema } from './ArtistUncheckedCreateWithoutGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutGenresInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutGenresInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutGenresInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutGenresInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutGenresInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutGenresInputObjectSchema = Schema;
