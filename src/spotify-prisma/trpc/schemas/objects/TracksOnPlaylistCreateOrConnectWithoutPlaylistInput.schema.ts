import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateWithoutPlaylistInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateOrConnectWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema =
  Schema;
