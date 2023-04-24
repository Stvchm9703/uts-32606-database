import { z } from 'zod';
import { TagUpdateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUpdateWithoutAlbumAvailableMarketInput.schema';
import { TagUncheckedUpdateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUncheckedUpdateWithoutAlbumAvailableMarketInput.schema';
import { TagCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateWithoutAlbumAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutAlbumAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpsertWithoutAlbumAvailableMarketInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutAlbumAvailableMarketInputObjectSchema),
      z.lazy(
        () => TagUncheckedUpdateWithoutAlbumAvailableMarketInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutAlbumAvailableMarketInputObjectSchema),
      z.lazy(
        () => TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const TagUpsertWithoutAlbumAvailableMarketInputObjectSchema = Schema;
