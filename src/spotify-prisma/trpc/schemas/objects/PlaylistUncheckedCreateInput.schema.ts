import { z } from 'zod';
import { TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    public: z.boolean(),
    primaryColor: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    tracks: z
      .lazy(
        () =>
          TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistUncheckedCreateInputObjectSchema = Schema;
