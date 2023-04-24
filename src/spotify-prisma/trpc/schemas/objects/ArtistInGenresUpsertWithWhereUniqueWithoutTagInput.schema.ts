import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresUpdateWithoutTagInputObjectSchema } from './ArtistInGenresUpdateWithoutTagInput.schema';
import { ArtistInGenresUncheckedUpdateWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedUpdateWithoutTagInput.schema';
import { ArtistInGenresCreateWithoutTagInputObjectSchema } from './ArtistInGenresCreateWithoutTagInput.schema';
import { ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistInGenresUpdateWithoutTagInputObjectSchema),
        z.lazy(() => ArtistInGenresUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArtistInGenresCreateWithoutTagInputObjectSchema),
        z.lazy(() => ArtistInGenresUncheckedCreateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistInGenresUpsertWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
