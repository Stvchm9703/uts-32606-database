import { z } from 'zod';
import { ArtistCreateWithoutGenresInputObjectSchema } from './ArtistCreateWithoutGenresInput.schema';
import { ArtistUncheckedCreateWithoutGenresInputObjectSchema } from './ArtistUncheckedCreateWithoutGenresInput.schema';
import { ArtistCreateOrConnectWithoutGenresInputObjectSchema } from './ArtistCreateOrConnectWithoutGenresInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutGenresInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutGenresInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutGenresInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutGenresInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtistCreateNestedOneWithoutGenresInputObjectSchema = Schema;
