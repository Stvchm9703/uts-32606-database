import { t, publicProcedure } from "./helpers/createRouter";
import { TracksOnPlaylistAggregateSchema } from "../schemas/aggregateTracksOnPlaylist.schema";
import { TracksOnPlaylistCreateManySchema } from "../schemas/createManyTracksOnPlaylist.schema";
import { TracksOnPlaylistCreateOneSchema } from "../schemas/createOneTracksOnPlaylist.schema";
import { TracksOnPlaylistDeleteManySchema } from "../schemas/deleteManyTracksOnPlaylist.schema";
import { TracksOnPlaylistDeleteOneSchema } from "../schemas/deleteOneTracksOnPlaylist.schema";
import { TracksOnPlaylistFindFirstSchema } from "../schemas/findFirstTracksOnPlaylist.schema";
import { TracksOnPlaylistFindManySchema } from "../schemas/findManyTracksOnPlaylist.schema";
import { TracksOnPlaylistFindUniqueSchema } from "../schemas/findUniqueTracksOnPlaylist.schema";
import { TracksOnPlaylistGroupBySchema } from "../schemas/groupByTracksOnPlaylist.schema";
import { TracksOnPlaylistUpdateManySchema } from "../schemas/updateManyTracksOnPlaylist.schema";
import { TracksOnPlaylistUpdateOneSchema } from "../schemas/updateOneTracksOnPlaylist.schema";
import { TracksOnPlaylistUpsertSchema } from "../schemas/upsertOneTracksOnPlaylist.schema";

export const tracksonplaylistsRouter = t.router({
  aggregateTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.aggregate(input);
      return aggregateTracksOnPlaylist;
    }),
  createManyTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.createMany(input);
      return createManyTracksOnPlaylist;
    }),
  createOneTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.create(input);
      return createOneTracksOnPlaylist;
    }),
  deleteManyTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.deleteMany(input);
      return deleteManyTracksOnPlaylist;
    }),
  deleteOneTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.delete(input);
      return deleteOneTracksOnPlaylist;
    }),
  findFirstTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.findFirst(input);
      return findFirstTracksOnPlaylist;
    }),
  findFirstTracksOnPlaylistOrThrow: publicProcedure
    .input(TracksOnPlaylistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTracksOnPlaylistOrThrow = await ctx.prisma.tracksOnPlaylist.findFirstOrThrow(input);
      return findFirstTracksOnPlaylistOrThrow;
    }),
  findManyTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistFindManySchema).query(async ({ ctx, input }) => {
      const findManyTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.findMany(input);
      return findManyTracksOnPlaylist;
    }),
  findUniqueTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.findUnique(input);
      return findUniqueTracksOnPlaylist;
    }),
  findUniqueTracksOnPlaylistOrThrow: publicProcedure
    .input(TracksOnPlaylistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTracksOnPlaylistOrThrow = await ctx.prisma.tracksOnPlaylist.findUniqueOrThrow(input);
      return findUniqueTracksOnPlaylistOrThrow;
    }),
  groupByTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTracksOnPlaylist;
    }),
  updateManyTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.updateMany(input);
      return updateManyTracksOnPlaylist;
    }),
  updateOneTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.update(input);
      return updateOneTracksOnPlaylist;
    }),
  upsertOneTracksOnPlaylist: publicProcedure
    .input(TracksOnPlaylistUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTracksOnPlaylist = await ctx.prisma.tracksOnPlaylist.upsert(input);
      return upsertOneTracksOnPlaylist;
    }),

}) 
