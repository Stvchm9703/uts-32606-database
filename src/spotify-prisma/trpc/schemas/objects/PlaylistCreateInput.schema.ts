import { z } from 'zod';
import { TracksOnPlaylistCreateNestedManyWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateNestedManyWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    public: z.boolean(),
    primaryColor: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    tracks: z
      .lazy(
        () => TracksOnPlaylistCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistCreateInputObjectSchema = Schema;
