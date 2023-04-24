import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './objects/ArtistOnFollowingWhereUniqueInput.schema';
import { ArtistOnFollowingCreateInputObjectSchema } from './objects/ArtistOnFollowingCreateInput.schema';
import { ArtistOnFollowingUncheckedCreateInputObjectSchema } from './objects/ArtistOnFollowingUncheckedCreateInput.schema';
import { ArtistOnFollowingUpdateInputObjectSchema } from './objects/ArtistOnFollowingUpdateInput.schema';
import { ArtistOnFollowingUncheckedUpdateInputObjectSchema } from './objects/ArtistOnFollowingUncheckedUpdateInput.schema';

export const ArtistOnFollowingUpsertSchema = z.object({
  where: ArtistOnFollowingWhereUniqueInputObjectSchema,
  create: z.union([
    ArtistOnFollowingCreateInputObjectSchema,
    ArtistOnFollowingUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArtistOnFollowingUpdateInputObjectSchema,
    ArtistOnFollowingUncheckedUpdateInputObjectSchema,
  ]),
});
