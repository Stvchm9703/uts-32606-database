import { z } from 'zod';
import { TracksOnPlaylistCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutTrackInput.schema';
import { TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateOrConnectWithoutTrackInput.schema';
import { TracksOnPlaylistCreateManyTrackInputEnvelopeObjectSchema } from './TracksOnPlaylistCreateManyTrackInputEnvelope.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TracksOnPlaylistCreateWithoutTrackInputObjectSchema),
          z
            .lazy(() => TracksOnPlaylistCreateWithoutTrackInputObjectSchema)
            .array(),
          z.lazy(
            () => TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TracksOnPlaylistCreateManyTrackInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInputObjectSchema =
  Schema;
