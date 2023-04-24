import { z } from 'zod';
import { TagCreateNestedOneWithoutTracksAvailableMarketInputObjectSchema } from './TagCreateNestedOneWithoutTracksAvailableMarketInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketCreateWithoutTrackInput> = z
  .object({
    Tag: z.lazy(
      () => TagCreateNestedOneWithoutTracksAvailableMarketInputObjectSchema,
    ),
  })
  .strict();

export const TracksAvailableMarketCreateWithoutTrackInputObjectSchema = Schema;
