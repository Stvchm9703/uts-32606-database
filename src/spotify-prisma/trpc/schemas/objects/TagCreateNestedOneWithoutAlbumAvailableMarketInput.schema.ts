import { z } from 'zod';
import { TagCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateWithoutAlbumAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutAlbumAvailableMarketInput.schema';
import { TagCreateOrConnectWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateOrConnectWithoutAlbumAvailableMarketInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutAlbumAvailableMarketInput> =
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
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TagCreateNestedOneWithoutAlbumAvailableMarketInputObjectSchema =
  Schema;
