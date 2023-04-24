import { z } from 'zod';
import { ArtistInGenresUpdateInputObjectSchema } from './objects/ArtistInGenresUpdateInput.schema';
import { ArtistInGenresUncheckedUpdateInputObjectSchema } from './objects/ArtistInGenresUncheckedUpdateInput.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './objects/ArtistInGenresWhereUniqueInput.schema';

export const ArtistInGenresUpdateOneSchema = z.object({
  data: z.union([
    ArtistInGenresUpdateInputObjectSchema,
    ArtistInGenresUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistInGenresWhereUniqueInputObjectSchema,
});
