import { z } from 'zod';

export const AlbumMetaScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'releaseDate',
  'releaseDatePrecision',
  'copyrights',
]);
