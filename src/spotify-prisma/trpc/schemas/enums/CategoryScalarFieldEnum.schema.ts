import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum([
  'id',
  'hashId',
  'name',
  'icon',
]);
