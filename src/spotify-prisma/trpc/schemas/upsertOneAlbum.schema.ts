import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumCreateInputObjectSchema } from './objects/AlbumCreateInput.schema';
import { AlbumUncheckedCreateInputObjectSchema } from './objects/AlbumUncheckedCreateInput.schema';
import { AlbumUpdateInputObjectSchema } from './objects/AlbumUpdateInput.schema';
import { AlbumUncheckedUpdateInputObjectSchema } from './objects/AlbumUncheckedUpdateInput.schema';

export const AlbumUpsertSchema = z.object({
  where: AlbumWhereUniqueInputObjectSchema,
  create: z.union([
    AlbumCreateInputObjectSchema,
    AlbumUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AlbumUpdateInputObjectSchema,
    AlbumUncheckedUpdateInputObjectSchema,
  ]),
});
