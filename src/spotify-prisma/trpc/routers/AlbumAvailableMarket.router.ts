import { t, publicProcedure } from "./helpers/createRouter";
import { AlbumAvailableMarketAggregateSchema } from "../schemas/aggregateAlbumAvailableMarket.schema";
import { AlbumAvailableMarketCreateManySchema } from "../schemas/createManyAlbumAvailableMarket.schema";
import { AlbumAvailableMarketCreateOneSchema } from "../schemas/createOneAlbumAvailableMarket.schema";
import { AlbumAvailableMarketDeleteManySchema } from "../schemas/deleteManyAlbumAvailableMarket.schema";
import { AlbumAvailableMarketDeleteOneSchema } from "../schemas/deleteOneAlbumAvailableMarket.schema";
import { AlbumAvailableMarketFindFirstSchema } from "../schemas/findFirstAlbumAvailableMarket.schema";
import { AlbumAvailableMarketFindManySchema } from "../schemas/findManyAlbumAvailableMarket.schema";
import { AlbumAvailableMarketFindUniqueSchema } from "../schemas/findUniqueAlbumAvailableMarket.schema";
import { AlbumAvailableMarketGroupBySchema } from "../schemas/groupByAlbumAvailableMarket.schema";
import { AlbumAvailableMarketUpdateManySchema } from "../schemas/updateManyAlbumAvailableMarket.schema";
import { AlbumAvailableMarketUpdateOneSchema } from "../schemas/updateOneAlbumAvailableMarket.schema";
import { AlbumAvailableMarketUpsertSchema } from "../schemas/upsertOneAlbumAvailableMarket.schema";

export const albumavailablemarketsRouter = t.router({
  aggregateAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.aggregate(input);
      return aggregateAlbumAvailableMarket;
    }),
  createManyAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.createMany(input);
      return createManyAlbumAvailableMarket;
    }),
  createOneAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.create(input);
      return createOneAlbumAvailableMarket;
    }),
  deleteManyAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.deleteMany(input);
      return deleteManyAlbumAvailableMarket;
    }),
  deleteOneAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.delete(input);
      return deleteOneAlbumAvailableMarket;
    }),
  findFirstAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.findFirst(input);
      return findFirstAlbumAvailableMarket;
    }),
  findFirstAlbumAvailableMarketOrThrow: publicProcedure
    .input(AlbumAvailableMarketFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAlbumAvailableMarketOrThrow = await ctx.prisma.albumAvailableMarket.findFirstOrThrow(input);
      return findFirstAlbumAvailableMarketOrThrow;
    }),
  findManyAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketFindManySchema).query(async ({ ctx, input }) => {
      const findManyAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.findMany(input);
      return findManyAlbumAvailableMarket;
    }),
  findUniqueAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.findUnique(input);
      return findUniqueAlbumAvailableMarket;
    }),
  findUniqueAlbumAvailableMarketOrThrow: publicProcedure
    .input(AlbumAvailableMarketFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAlbumAvailableMarketOrThrow = await ctx.prisma.albumAvailableMarket.findUniqueOrThrow(input);
      return findUniqueAlbumAvailableMarketOrThrow;
    }),
  groupByAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAlbumAvailableMarket;
    }),
  updateManyAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.updateMany(input);
      return updateManyAlbumAvailableMarket;
    }),
  updateOneAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.update(input);
      return updateOneAlbumAvailableMarket;
    }),
  upsertOneAlbumAvailableMarket: publicProcedure
    .input(AlbumAvailableMarketUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAlbumAvailableMarket = await ctx.prisma.albumAvailableMarket.upsert(input);
      return upsertOneAlbumAvailableMarket;
    }),

}) 
