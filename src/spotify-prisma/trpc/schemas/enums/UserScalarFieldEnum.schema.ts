import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'name',
  'email',
  'authType',
  'type',
  'country',
  'explicitContentFilterEnabled',
  'explicitContentFilterLocked',
  'imagesId',
  'product',
]);
