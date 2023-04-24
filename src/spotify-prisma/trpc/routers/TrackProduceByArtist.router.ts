import { t, publicProcedure } from "./helpers/createRouter";
import { TrackProduceByArtistAggregateSchema } from "../schemas/aggregateTrackProduceByArtist.schema";
import { TrackProduceByArtistCreateManySchema } from "../schemas/createManyTrackProduceByArtist.schema";
import { TrackProduceByArtistCreateOneSchema } from "../schemas/createOneTrackProduceByArtist.schema";
import { TrackProduceByArtistDeleteManySchema } from "../schemas/deleteManyTrackProduceByArtist.schema";
import { TrackProduceByArtistDeleteOneSchema } from "../schemas/deleteOneTrackProduceByArtist.schema";
import { TrackProduceByArtistFindFirstSchema } from "../schemas/findFirstTrackProduceByArtist.schema";
import { TrackProduceByArtistFindManySchema } from "../schemas/findManyTrackProduceByArtist.schema";
import { TrackProduceByArtistFindUniqueSchema } from "../schemas/findUniqueTrackProduceByArtist.schema";
import { TrackProduceByArtistGroupBySchema } from "../schemas/groupByTrackProduceByArtist.schema";
import { TrackProduceByArtistUpdateManySchema } from "../schemas/updateManyTrackProduceByArtist.schema";
import { TrackProduceByArtistUpdateOneSchema } from "../schemas/updateOneTrackProduceByArtist.schema";
import { TrackProduceByArtistUpsertSchema } from "../schemas/upsertOneTrackProduceByArtist.schema";

export const trackproducebyartistsRouter = t.router({
  aggregateTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.aggregate(input);
      return aggregateTrackProduceByArtist;
    }),
  createManyTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.createMany(input);
      return createManyTrackProduceByArtist;
    }),
  createOneTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.create(input);
      return createOneTrackProduceByArtist;
    }),
  deleteManyTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.deleteMany(input);
      return deleteManyTrackProduceByArtist;
    }),
  deleteOneTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.delete(input);
      return deleteOneTrackProduceByArtist;
    }),
  findFirstTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.findFirst(input);
      return findFirstTrackProduceByArtist;
    }),
  findFirstTrackProduceByArtistOrThrow: publicProcedure
    .input(TrackProduceByArtistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTrackProduceByArtistOrThrow = await ctx.prisma.trackProduceByArtist.findFirstOrThrow(input);
      return findFirstTrackProduceByArtistOrThrow;
    }),
  findManyTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistFindManySchema).query(async ({ ctx, input }) => {
      const findManyTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.findMany(input);
      return findManyTrackProduceByArtist;
    }),
  findUniqueTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.findUnique(input);
      return findUniqueTrackProduceByArtist;
    }),
  findUniqueTrackProduceByArtistOrThrow: publicProcedure
    .input(TrackProduceByArtistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTrackProduceByArtistOrThrow = await ctx.prisma.trackProduceByArtist.findUniqueOrThrow(input);
      return findUniqueTrackProduceByArtistOrThrow;
    }),
  groupByTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTrackProduceByArtist;
    }),
  updateManyTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.updateMany(input);
      return updateManyTrackProduceByArtist;
    }),
  updateOneTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.update(input);
      return updateOneTrackProduceByArtist;
    }),
  upsertOneTrackProduceByArtist: publicProcedure
    .input(TrackProduceByArtistUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTrackProduceByArtist = await ctx.prisma.trackProduceByArtist.upsert(input);
      return upsertOneTrackProduceByArtist;
    }),

}) 
