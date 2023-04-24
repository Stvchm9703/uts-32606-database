import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresUpdateWithoutArtistInputObjectSchema } from './ArtistInGenresUpdateWithoutArtistInput.schema';
import { ArtistInGenresUncheckedUpdateWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedUpdateWithoutArtistInput.schema';
import { ArtistInGenresCreateWithoutArtistInputObjectSchema } from './ArtistInGenresCreateWithoutArtistInput.schema';
import { ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistInGenresUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistInGenresUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ArtistInGenresCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistInGenresUpsertWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
