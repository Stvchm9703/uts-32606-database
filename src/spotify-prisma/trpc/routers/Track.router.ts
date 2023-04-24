import { t, publicProcedure } from "./helpers/createRouter";
import { TrackAggregateSchema } from "../schemas/aggregateTrack.schema";
import { TrackCreateManySchema } from "../schemas/createManyTrack.schema";
import { TrackCreateOneSchema } from "../schemas/createOneTrack.schema";
import { TrackDeleteManySchema } from "../schemas/deleteManyTrack.schema";
import { TrackDeleteOneSchema } from "../schemas/deleteOneTrack.schema";
import { TrackFindFirstSchema } from "../schemas/findFirstTrack.schema";
import { TrackFindManySchema } from "../schemas/findManyTrack.schema";
import { TrackFindUniqueSchema } from "../schemas/findUniqueTrack.schema";
import { TrackGroupBySchema } from "../schemas/groupByTrack.schema";
import { TrackUpdateManySchema } from "../schemas/updateManyTrack.schema";
import { TrackUpdateOneSchema } from "../schemas/updateOneTrack.schema";
import { TrackUpsertSchema } from "../schemas/upsertOneTrack.schema";

export const tracksRouter = t.router({
  aggregateTrack: publicProcedure
    .input(TrackAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTrack = await ctx.prisma.track.aggregate(input);
      return aggregateTrack;
    }),
  createManyTrack: publicProcedure
    .input(TrackCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTrack = await ctx.prisma.track.createMany(input);
      return createManyTrack;
    }),
  createOneTrack: publicProcedure
    .input(TrackCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTrack = await ctx.prisma.track.create(input);
      return createOneTrack;
    }),
  deleteManyTrack: publicProcedure
    .input(TrackDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTrack = await ctx.prisma.track.deleteMany(input);
      return deleteManyTrack;
    }),
  deleteOneTrack: publicProcedure
    .input(TrackDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTrack = await ctx.prisma.track.delete(input);
      return deleteOneTrack;
    }),
  findFirstTrack: publicProcedure
    .input(TrackFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTrack = await ctx.prisma.track.findFirst(input);
      return findFirstTrack;
    }),
  findFirstTrackOrThrow: publicProcedure
    .input(TrackFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTrackOrThrow = await ctx.prisma.track.findFirstOrThrow(input);
      return findFirstTrackOrThrow;
    }),
  findManyTrack: publicProcedure
    .input(TrackFindManySchema).query(async ({ ctx, input }) => {
      const findManyTrack = await ctx.prisma.track.findMany(input);
      return findManyTrack;
    }),
  findUniqueTrack: publicProcedure
    .input(TrackFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTrack = await ctx.prisma.track.findUnique(input);
      return findUniqueTrack;
    }),
  findUniqueTrackOrThrow: publicProcedure
    .input(TrackFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTrackOrThrow = await ctx.prisma.track.findUniqueOrThrow(input);
      return findUniqueTrackOrThrow;
    }),
  groupByTrack: publicProcedure
    .input(TrackGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTrack = await ctx.prisma.track.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTrack;
    }),
  updateManyTrack: publicProcedure
    .input(TrackUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTrack = await ctx.prisma.track.updateMany(input);
      return updateManyTrack;
    }),
  updateOneTrack: publicProcedure
    .input(TrackUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTrack = await ctx.prisma.track.update(input);
      return updateOneTrack;
    }),
  upsertOneTrack: publicProcedure
    .input(TrackUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTrack = await ctx.prisma.track.upsert(input);
      return upsertOneTrack;
    }),

}) 
