import { z } from 'zod';

export const PlaylistScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'collaborative',
  'description',
  'name',
  'public',
  'snapshotId',
  'primaryColor',
  'tracksIds',
  'ownerId',
  'imagesId',
]);
