import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresCreateWithoutArtistInputObjectSchema } from './ArtistInGenresCreateWithoutArtistInput.schema';
import { ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateOrConnectWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistInGenresCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistInGenresUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistInGenresCreateOrConnectWithoutArtistInputObjectSchema =
  Schema;
