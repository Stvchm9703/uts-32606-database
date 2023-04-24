import { z } from 'zod';
import { TagCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateWithoutAlbumAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutAlbumAvailableMarketInput.schema';
import { TagCreateOrConnectWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateOrConnectWithoutAlbumAvailableMarketInput.schema';
import { TagUpsertWithoutAlbumAvailableMarketInputObjectSchema } from './TagUpsertWithoutAlbumAvailableMarketInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUpdateWithoutAlbumAvailableMarketInput.schema';
import { TagUncheckedUpdateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUncheckedUpdateWithoutAlbumAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutAlbumAvailableMarketInputObjectSchema),
          z.lazy(
            () =>
              TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => TagCreateOrConnectWithoutAlbumAvailableMarketInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => TagUpsertWithoutAlbumAvailableMarketInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TagUpdateWithoutAlbumAvailableMarketInputObjectSchema),
          z.lazy(
            () =>
              TagUncheckedUpdateWithoutAlbumAvailableMarketInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInputObjectSchema =
  Schema;
