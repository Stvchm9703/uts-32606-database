import { z } from 'zod';
import { TagUpdateWithoutArtistInGenresInputObjectSchema } from './TagUpdateWithoutArtistInGenresInput.schema';
import { TagUncheckedUpdateWithoutArtistInGenresInputObjectSchema } from './TagUncheckedUpdateWithoutArtistInGenresInput.schema';
import { TagCreateWithoutArtistInGenresInputObjectSchema } from './TagCreateWithoutArtistInGenresInput.schema';
import { TagUncheckedCreateWithoutArtistInGenresInputObjectSchema } from './TagUncheckedCreateWithoutArtistInGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpsertWithoutArtistInGenresInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutArtistInGenresInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutArtistInGenresInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutArtistInGenresInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutArtistInGenresInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithoutArtistInGenresInputObjectSchema = Schema;
