import { t, publicProcedure } from "./helpers/createRouter";
import { AlbumMetaAggregateSchema } from "../schemas/aggregateAlbumMeta.schema";
import { AlbumMetaCreateManySchema } from "../schemas/createManyAlbumMeta.schema";
import { AlbumMetaCreateOneSchema } from "../schemas/createOneAlbumMeta.schema";
import { AlbumMetaDeleteManySchema } from "../schemas/deleteManyAlbumMeta.schema";
import { AlbumMetaDeleteOneSchema } from "../schemas/deleteOneAlbumMeta.schema";
import { AlbumMetaFindFirstSchema } from "../schemas/findFirstAlbumMeta.schema";
import { AlbumMetaFindManySchema } from "../schemas/findManyAlbumMeta.schema";
import { AlbumMetaFindUniqueSchema } from "../schemas/findUniqueAlbumMeta.schema";
import { AlbumMetaGroupBySchema } from "../schemas/groupByAlbumMeta.schema";
import { AlbumMetaUpdateManySchema } from "../schemas/updateManyAlbumMeta.schema";
import { AlbumMetaUpdateOneSchema } from "../schemas/updateOneAlbumMeta.schema";
import { AlbumMetaUpsertSchema } from "../schemas/upsertOneAlbumMeta.schema";

export const albummetasRouter = t.router({
  aggregateAlbumMeta: publicProcedure
    .input(AlbumMetaAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAlbumMeta = await ctx.prisma.albumMeta.aggregate(input);
      return aggregateAlbumMeta;
    }),
  createManyAlbumMeta: publicProcedure
    .input(AlbumMetaCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAlbumMeta = await ctx.prisma.albumMeta.createMany(input);
      return createManyAlbumMeta;
    }),
  createOneAlbumMeta: publicProcedure
    .input(AlbumMetaCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAlbumMeta = await ctx.prisma.albumMeta.create(input);
      return createOneAlbumMeta;
    }),
  deleteManyAlbumMeta: publicProcedure
    .input(AlbumMetaDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAlbumMeta = await ctx.prisma.albumMeta.deleteMany(input);
      return deleteManyAlbumMeta;
    }),
  deleteOneAlbumMeta: publicProcedure
    .input(AlbumMetaDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAlbumMeta = await ctx.prisma.albumMeta.delete(input);
      return deleteOneAlbumMeta;
    }),
  findFirstAlbumMeta: publicProcedure
    .input(AlbumMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAlbumMeta = await ctx.prisma.albumMeta.findFirst(input);
      return findFirstAlbumMeta;
    }),
  findFirstAlbumMetaOrThrow: publicProcedure
    .input(AlbumMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAlbumMetaOrThrow = await ctx.prisma.albumMeta.findFirstOrThrow(input);
      return findFirstAlbumMetaOrThrow;
    }),
  findManyAlbumMeta: publicProcedure
    .input(AlbumMetaFindManySchema).query(async ({ ctx, input }) => {
      const findManyAlbumMeta = await ctx.prisma.albumMeta.findMany(input);
      return findManyAlbumMeta;
    }),
  findUniqueAlbumMeta: publicProcedure
    .input(AlbumMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAlbumMeta = await ctx.prisma.albumMeta.findUnique(input);
      return findUniqueAlbumMeta;
    }),
  findUniqueAlbumMetaOrThrow: publicProcedure
    .input(AlbumMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAlbumMetaOrThrow = await ctx.prisma.albumMeta.findUniqueOrThrow(input);
      return findUniqueAlbumMetaOrThrow;
    }),
  groupByAlbumMeta: publicProcedure
    .input(AlbumMetaGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAlbumMeta = await ctx.prisma.albumMeta.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAlbumMeta;
    }),
  updateManyAlbumMeta: publicProcedure
    .input(AlbumMetaUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAlbumMeta = await ctx.prisma.albumMeta.updateMany(input);
      return updateManyAlbumMeta;
    }),
  updateOneAlbumMeta: publicProcedure
    .input(AlbumMetaUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAlbumMeta = await ctx.prisma.albumMeta.update(input);
      return updateOneAlbumMeta;
    }),
  upsertOneAlbumMeta: publicProcedure
    .input(AlbumMetaUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAlbumMeta = await ctx.prisma.albumMeta.upsert(input);
      return upsertOneAlbumMeta;
    }),

}) 
