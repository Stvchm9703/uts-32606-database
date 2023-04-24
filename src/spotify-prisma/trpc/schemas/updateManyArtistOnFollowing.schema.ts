import { z } from 'zod';
import { ArtistOnFollowingUpdateManyMutationInputObjectSchema } from './objects/ArtistOnFollowingUpdateManyMutationInput.schema';
import { ArtistOnFollowingWhereInputObjectSchema } from './objects/ArtistOnFollowingWhereInput.schema';

export const ArtistOnFollowingUpdateManySchema = z.object({
  data: ArtistOnFollowingUpdateManyMutationInputObjectSchema,
  where: ArtistOnFollowingWhereInputObjectSchema.optional(),
});
