import { z } from 'zod';

export const PlaylistScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'public',
  'primaryColor',
  'imagesId',
]);
