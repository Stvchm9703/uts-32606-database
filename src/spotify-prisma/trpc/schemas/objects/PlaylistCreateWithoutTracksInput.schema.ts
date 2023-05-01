import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateWithoutTracksInput> = z
  .object({
    name: z.string(),
    description: z.string(),
    public: z.boolean(),
    primaryColor: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
  })
  .strict();

export const PlaylistCreateWithoutTracksInputObjectSchema = Schema;
