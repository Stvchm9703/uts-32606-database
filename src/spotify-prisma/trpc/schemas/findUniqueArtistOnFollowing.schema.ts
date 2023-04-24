import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './objects/ArtistOnFollowingWhereUniqueInput.schema';

export const ArtistOnFollowingFindUniqueSchema = z.object({
  where: ArtistOnFollowingWhereUniqueInputObjectSchema,
});
