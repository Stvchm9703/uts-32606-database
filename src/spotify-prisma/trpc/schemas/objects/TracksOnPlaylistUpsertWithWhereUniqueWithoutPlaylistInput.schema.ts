import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistUpdateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUpdateWithoutPlaylistInput.schema';
import { TracksOnPlaylistUncheckedUpdateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateWithoutPlaylistInput.schema';
import { TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateWithoutPlaylistInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TracksOnPlaylistUpdateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedUpdateWithoutPlaylistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema =
  Schema;
