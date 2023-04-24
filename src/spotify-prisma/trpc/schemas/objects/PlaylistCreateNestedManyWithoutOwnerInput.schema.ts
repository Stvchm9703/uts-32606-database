import { z } from 'zod';
import { PlaylistCreateWithoutOwnerInputObjectSchema } from './PlaylistCreateWithoutOwnerInput.schema';
import { PlaylistUncheckedCreateWithoutOwnerInputObjectSchema } from './PlaylistUncheckedCreateWithoutOwnerInput.schema';
import { PlaylistCreateOrConnectWithoutOwnerInputObjectSchema } from './PlaylistCreateOrConnectWithoutOwnerInput.schema';
import { PlaylistCreateManyOwnerInputEnvelopeObjectSchema } from './PlaylistCreateManyOwnerInputEnvelope.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateNestedManyWithoutOwnerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PlaylistCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => PlaylistCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => PlaylistUncheckedCreateWithoutOwnerInputObjectSchema),
        z
          .lazy(() => PlaylistUncheckedCreateWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PlaylistCreateOrConnectWithoutOwnerInputObjectSchema),
        z
          .lazy(() => PlaylistCreateOrConnectWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PlaylistCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PlaylistCreateNestedManyWithoutOwnerInputObjectSchema = Schema;
