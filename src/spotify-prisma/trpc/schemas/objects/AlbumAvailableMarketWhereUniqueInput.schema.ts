import { z } from 'zod';
import { AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInputObjectSchema } from './AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketWhereUniqueInput> = z
  .object({
    albumId_tagId: z
      .lazy(
        () => AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AlbumAvailableMarketWhereUniqueInputObjectSchema = Schema;
