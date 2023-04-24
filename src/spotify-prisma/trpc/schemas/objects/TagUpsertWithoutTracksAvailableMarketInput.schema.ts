import { z } from 'zod';
import { TagUpdateWithoutTracksAvailableMarketInputObjectSchema } from './TagUpdateWithoutTracksAvailableMarketInput.schema';
import { TagUncheckedUpdateWithoutTracksAvailableMarketInputObjectSchema } from './TagUncheckedUpdateWithoutTracksAvailableMarketInput.schema';
import { TagCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateWithoutTracksAvailableMarketInput.schema';
import { TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema } from './TagUncheckedCreateWithoutTracksAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpsertWithoutTracksAvailableMarketInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutTracksAvailableMarketInputObjectSchema),
      z.lazy(
        () => TagUncheckedUpdateWithoutTracksAvailableMarketInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutTracksAvailableMarketInputObjectSchema),
      z.lazy(
        () => TagUncheckedCreateWithoutTracksAvailableMarketInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const TagUpsertWithoutTracksAvailableMarketInputObjectSchema = Schema;
