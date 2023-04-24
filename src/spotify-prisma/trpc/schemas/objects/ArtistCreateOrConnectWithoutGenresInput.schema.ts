import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutGenresInputObjectSchema } from './ArtistCreateWithoutGenresInput.schema';
import { ArtistUncheckedCreateWithoutGenresInputObjectSchema } from './ArtistUncheckedCreateWithoutGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutGenresInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutGenresInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutGenresInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutGenresInputObjectSchema = Schema;
