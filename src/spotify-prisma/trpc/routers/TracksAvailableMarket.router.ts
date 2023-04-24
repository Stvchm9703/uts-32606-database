import { t, publicProcedure } from "./helpers/createRouter";
import { TracksAvailableMarketAggregateSchema } from "../schemas/aggregateTracksAvailableMarket.schema";
import { TracksAvailableMarketCreateManySchema } from "../schemas/createManyTracksAvailableMarket.schema";
import { TracksAvailableMarketCreateOneSchema } from "../schemas/createOneTracksAvailableMarket.schema";
import { TracksAvailableMarketDeleteManySchema } from "../schemas/deleteManyTracksAvailableMarket.schema";
import { TracksAvailableMarketDeleteOneSchema } from "../schemas/deleteOneTracksAvailableMarket.schema";
import { TracksAvailableMarketFindFirstSchema } from "../schemas/findFirstTracksAvailableMarket.schema";
import { TracksAvailableMarketFindManySchema } from "../schemas/findManyTracksAvailableMarket.schema";
import { TracksAvailableMarketFindUniqueSchema } from "../schemas/findUniqueTracksAvailableMarket.schema";
import { TracksAvailableMarketGroupBySchema } from "../schemas/groupByTracksAvailableMarket.schema";
import { TracksAvailableMarketUpdateManySchema } from "../schemas/updateManyTracksAvailableMarket.schema";
import { TracksAvailableMarketUpdateOneSchema } from "../schemas/updateOneTracksAvailableMarket.schema";
import { TracksAvailableMarketUpsertSchema } from "../schemas/upsertOneTracksAvailableMarket.schema";

export const tracksavailablemarketsRouter = t.router({
  aggregateTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.aggregate(input);
      return aggregateTracksAvailableMarket;
    }),
  createManyTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.createMany(input);
      return createManyTracksAvailableMarket;
    }),
  createOneTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.create(input);
      return createOneTracksAvailableMarket;
    }),
  deleteManyTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.deleteMany(input);
      return deleteManyTracksAvailableMarket;
    }),
  deleteOneTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.delete(input);
      return deleteOneTracksAvailableMarket;
    }),
  findFirstTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.findFirst(input);
      return findFirstTracksAvailableMarket;
    }),
  findFirstTracksAvailableMarketOrThrow: publicProcedure
    .input(TracksAvailableMarketFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTracksAvailableMarketOrThrow = await ctx.prisma.tracksAvailableMarket.findFirstOrThrow(input);
      return findFirstTracksAvailableMarketOrThrow;
    }),
  findManyTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketFindManySchema).query(async ({ ctx, input }) => {
      const findManyTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.findMany(input);
      return findManyTracksAvailableMarket;
    }),
  findUniqueTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.findUnique(input);
      return findUniqueTracksAvailableMarket;
    }),
  findUniqueTracksAvailableMarketOrThrow: publicProcedure
    .input(TracksAvailableMarketFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTracksAvailableMarketOrThrow = await ctx.prisma.tracksAvailableMarket.findUniqueOrThrow(input);
      return findUniqueTracksAvailableMarketOrThrow;
    }),
  groupByTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTracksAvailableMarket;
    }),
  updateManyTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.updateMany(input);
      return updateManyTracksAvailableMarket;
    }),
  updateOneTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.update(input);
      return updateOneTracksAvailableMarket;
    }),
  upsertOneTracksAvailableMarket: publicProcedure
    .input(TracksAvailableMarketUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTracksAvailableMarket = await ctx.prisma.tracksAvailableMarket.upsert(input);
      return upsertOneTracksAvailableMarket;
    }),

}) 
