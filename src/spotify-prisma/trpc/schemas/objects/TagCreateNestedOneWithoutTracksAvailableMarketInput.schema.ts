import { z } from 'zod';
import { TagCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateWithoutTracksAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutTracksAvailableMarketInput.schema';
import { TagCreateOrConnectWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateOrConnectWithoutTracksAvailableMarketInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutTracksAvailableMarketInput> =
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
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TagCreateNestedOneWithoutTracksAvailableMarketInputObjectSchema =
  Schema;
