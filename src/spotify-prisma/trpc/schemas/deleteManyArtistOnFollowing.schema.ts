import { z } from 'zod';
import { ArtistOnFollowingWhereInputObjectSchema } from './objects/ArtistOnFollowingWhereInput.schema';

export const ArtistOnFollowingDeleteManySchema = z.object({
  where: ArtistOnFollowingWhereInputObjectSchema.optional(),
});
