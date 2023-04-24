import { z } from 'zod';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';
import { AlbumCreateOrConnectWithoutArtistsInputObjectSchema } from './AlbumCreateOrConnectWithoutArtistsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateNestedOneWithoutArtistsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AlbumCreateNestedOneWithoutArtistsInputObjectSchema = Schema;
