import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      tagId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      trackId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const TracksAvailableMarketScalarWhereWithAggregatesInputObjectSchema =
  Schema;
