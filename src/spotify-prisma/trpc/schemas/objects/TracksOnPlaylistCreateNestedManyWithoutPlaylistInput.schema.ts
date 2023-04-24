import { z } from 'zod';
import { TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateWithoutPlaylistInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutPlaylistInput.schema';
import { TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateOrConnectWithoutPlaylistInput.schema';
import { TracksOnPlaylistCreateManyPlaylistInputEnvelopeObjectSchema } from './TracksOnPlaylistCreateManyPlaylistInputEnvelope.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateNestedManyWithoutPlaylistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema),
          z
            .lazy(() => TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TracksOnPlaylistCreateManyPlaylistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TracksOnPlaylistCreateNestedManyWithoutPlaylistInputObjectSchema =
  Schema;
