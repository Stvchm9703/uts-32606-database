import { z } from 'zod';
import { TracksAvailableMarketCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateWithoutTagInput.schema';
import { TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema } from './TracksAvailableMarketUncheckedCreateWithoutTagInput.schema';
import { TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema } from './TracksAvailableMarketCreateOrConnectWithoutTagInput.schema';
import { TracksAvailableMarketCreateManyTagInputEnvelopeObjectSchema } from './TracksAvailableMarketCreateManyTagInputEnvelope.schema';
import { TracksAvailableMarketWhereUniqueInputObjectSchema } from './TracksAvailableMarketWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TracksAvailableMarketCreateWithoutTagInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketCreateWithoutTagInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketUncheckedCreateWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksAvailableMarketCreateOrConnectWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TracksAvailableMarketCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema),
          z
            .lazy(() => TracksAvailableMarketWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInputObjectSchema =
  Schema;
