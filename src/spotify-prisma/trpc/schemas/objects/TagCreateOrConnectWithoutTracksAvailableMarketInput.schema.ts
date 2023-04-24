import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateWithoutTracksAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutTracksAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutTracksAvailableMarketInput> =
  z
    .object({
      where: z.lazy(() => TagWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TagCreateWithoutTracksAvailableMarketInputObjectSchema),
        z.lazy(
          () => TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TagCreateOrConnectWithoutTracksAvailableMarketInputObjectSchema =
  Schema;
