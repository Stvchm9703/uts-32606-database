import { z } from 'zod';

export const AlbumScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'albumType',
  'totalTracks',
  'name',
  'releaseDate',
  'releaseDatePrecision',
  'albumGroup',
  'copyrights',
  'imageUrl',
]);
