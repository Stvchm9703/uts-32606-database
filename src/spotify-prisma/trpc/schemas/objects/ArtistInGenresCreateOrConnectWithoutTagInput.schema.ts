import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresCreateWithoutTagInputObjectSchema } from './ArtistInGenresCreateWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistInGenresCreateWithoutTagInputObjectSchema),
      z.lazy(() => ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistInGenresCreateOrConnectWithoutTagInputObjectSchema = Schema;
