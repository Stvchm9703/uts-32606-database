import { z } from 'zod';
import { TagCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateWithoutTracksAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutTracksAvailableMarketInput.schema';
import { TagCreateOrConnectWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateOrConnectWithoutTracksAvailableMarketInput.schema';
import { TagUpsertWithoutTracksAvailableMarketInputObjectSchema } from './TagUpsertWithoutTracksAvailableMarketInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutTracksAvailableMarketInputObjectSchema } from './TagUpdateWithoutTracksAvailableMarketInput.schema';
import { TagUncheckedUpdateWithoutTracksAvailableMarketInputObjectSchema } from './TagUncheckedUpdateWithoutTracksAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutTracksAvailableMarketInputObjectSchema),
          z.lazy(
            () =>
              TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => TagCreateOrConnectWithoutTracksAvailableMarketInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => TagUpsertWithoutTracksAvailableMarketInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TagUpdateWithoutTracksAvailableMarketInputObjectSchema),
          z.lazy(
            () =>
              TagUncheckedUpdateWithoutTracksAvailableMarketInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInputObjectSchema =
  Schema;
