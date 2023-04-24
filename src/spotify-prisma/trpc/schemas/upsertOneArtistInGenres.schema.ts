import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './objects/ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresCreateInputObjectSchema } from './objects/ArtistInGenresCreateInput.schema';
import { ArtistInGenresUncheckedCreateInputObjectSchema } from './objects/ArtistInGenresUncheckedCreateInput.schema';
import { ArtistInGenresUpdateInputObjectSchema } from './objects/ArtistInGenresUpdateInput.schema';
import { ArtistInGenresUncheckedUpdateInputObjectSchema } from './objects/ArtistInGenresUncheckedUpdateInput.schema';

export const ArtistInGenresUpsertSchema = z.object({
  where: ArtistInGenresWhereUniqueInputObjectSchema,
  create: z.union([
    ArtistInGenresCreateInputObjectSchema,
    ArtistInGenresUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArtistInGenresUpdateInputObjectSchema,
    ArtistInGenresUncheckedUpdateInputObjectSchema,
  ]),
});
