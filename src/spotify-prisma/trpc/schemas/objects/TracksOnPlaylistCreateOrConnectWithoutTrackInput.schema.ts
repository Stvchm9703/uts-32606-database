import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateOrConnectWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TracksOnPlaylistCreateWithoutTrackInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema =
  Schema;
