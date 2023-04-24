import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagCreateWithoutAlbumAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutAlbumAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutAlbumAvailableMarketInput> =
  z
    .object({
      where: z.lazy(() => TagWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TagCreateWithoutAlbumAvailableMarketInputObjectSchema),
        z.lazy(
          () => TagUncheckedCreateWithoutAlbumAvailableMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TagCreateOrConnectWithoutAlbumAvailableMarketInputObjectSchema =
  Schema;
