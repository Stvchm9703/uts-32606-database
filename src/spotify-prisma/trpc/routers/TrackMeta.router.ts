import { t, publicProcedure } from "./helpers/createRouter";
import { TrackMetaAggregateSchema } from "../schemas/aggregateTrackMeta.schema";
import { TrackMetaCreateManySchema } from "../schemas/createManyTrackMeta.schema";
import { TrackMetaCreateOneSchema } from "../schemas/createOneTrackMeta.schema";
import { TrackMetaDeleteManySchema } from "../schemas/deleteManyTrackMeta.schema";
import { TrackMetaDeleteOneSchema } from "../schemas/deleteOneTrackMeta.schema";
import { TrackMetaFindFirstSchema } from "../schemas/findFirstTrackMeta.schema";
import { TrackMetaFindManySchema } from "../schemas/findManyTrackMeta.schema";
import { TrackMetaFindUniqueSchema } from "../schemas/findUniqueTrackMeta.schema";
import { TrackMetaGroupBySchema } from "../schemas/groupByTrackMeta.schema";
import { TrackMetaUpdateManySchema } from "../schemas/updateManyTrackMeta.schema";
import { TrackMetaUpdateOneSchema } from "../schemas/updateOneTrackMeta.schema";
import { TrackMetaUpsertSchema } from "../schemas/upsertOneTrackMeta.schema";

export const trackmetasRouter = t.router({
  aggregateTrackMeta: publicProcedure
    .input(TrackMetaAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTrackMeta = await ctx.prisma.trackMeta.aggregate(input);
      return aggregateTrackMeta;
    }),
  createManyTrackMeta: publicProcedure
    .input(TrackMetaCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTrackMeta = await ctx.prisma.trackMeta.createMany(input);
      return createManyTrackMeta;
    }),
  createOneTrackMeta: publicProcedure
    .input(TrackMetaCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTrackMeta = await ctx.prisma.trackMeta.create(input);
      return createOneTrackMeta;
    }),
  deleteManyTrackMeta: publicProcedure
    .input(TrackMetaDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTrackMeta = await ctx.prisma.trackMeta.deleteMany(input);
      return deleteManyTrackMeta;
    }),
  deleteOneTrackMeta: publicProcedure
    .input(TrackMetaDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTrackMeta = await ctx.prisma.trackMeta.delete(input);
      return deleteOneTrackMeta;
    }),
  findFirstTrackMeta: publicProcedure
    .input(TrackMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTrackMeta = await ctx.prisma.trackMeta.findFirst(input);
      return findFirstTrackMeta;
    }),
  findFirstTrackMetaOrThrow: publicProcedure
    .input(TrackMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTrackMetaOrThrow = await ctx.prisma.trackMeta.findFirstOrThrow(input);
      return findFirstTrackMetaOrThrow;
    }),
  findManyTrackMeta: publicProcedure
    .input(TrackMetaFindManySchema).query(async ({ ctx, input }) => {
      const findManyTrackMeta = await ctx.prisma.trackMeta.findMany(input);
      return findManyTrackMeta;
    }),
  findUniqueTrackMeta: publicProcedure
    .input(TrackMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTrackMeta = await ctx.prisma.trackMeta.findUnique(input);
      return findUniqueTrackMeta;
    }),
  findUniqueTrackMetaOrThrow: publicProcedure
    .input(TrackMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTrackMetaOrThrow = await ctx.prisma.trackMeta.findUniqueOrThrow(input);
      return findUniqueTrackMetaOrThrow;
    }),
  groupByTrackMeta: publicProcedure
    .input(TrackMetaGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTrackMeta = await ctx.prisma.trackMeta.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTrackMeta;
    }),
  updateManyTrackMeta: publicProcedure
    .input(TrackMetaUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTrackMeta = await ctx.prisma.trackMeta.updateMany(input);
      return updateManyTrackMeta;
    }),
  updateOneTrackMeta: publicProcedure
    .input(TrackMetaUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTrackMeta = await ctx.prisma.trackMeta.update(input);
      return updateOneTrackMeta;
    }),
  upsertOneTrackMeta: publicProcedure
    .input(TrackMetaUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTrackMeta = await ctx.prisma.trackMeta.upsert(input);
      return upsertOneTrackMeta;
    }),

}) 
