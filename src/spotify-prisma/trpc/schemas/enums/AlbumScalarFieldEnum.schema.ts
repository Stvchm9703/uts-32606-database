import { z } from 'zod';

export const AlbumScalarFieldEnumSchema = z.enum([
  'id',
  'albumType',
  'totalTracks',
  'name',
  'imageUrl',
]);
