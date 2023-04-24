import { t, publicProcedure } from "./helpers/createRouter";
import { PlaylistAggregateSchema } from "../schemas/aggregatePlaylist.schema";
import { PlaylistCreateManySchema } from "../schemas/createManyPlaylist.schema";
import { PlaylistCreateOneSchema } from "../schemas/createOnePlaylist.schema";
import { PlaylistDeleteManySchema } from "../schemas/deleteManyPlaylist.schema";
import { PlaylistDeleteOneSchema } from "../schemas/deleteOnePlaylist.schema";
import { PlaylistFindFirstSchema } from "../schemas/findFirstPlaylist.schema";
import { PlaylistFindManySchema } from "../schemas/findManyPlaylist.schema";
import { PlaylistFindUniqueSchema } from "../schemas/findUniquePlaylist.schema";
import { PlaylistGroupBySchema } from "../schemas/groupByPlaylist.schema";
import { PlaylistUpdateManySchema } from "../schemas/updateManyPlaylist.schema";
import { PlaylistUpdateOneSchema } from "../schemas/updateOnePlaylist.schema";
import { PlaylistUpsertSchema } from "../schemas/upsertOnePlaylist.schema";

export const playlistsRouter = t.router({
  aggregatePlaylist: publicProcedure
    .input(PlaylistAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePlaylist = await ctx.prisma.playlist.aggregate(input);
      return aggregatePlaylist;
    }),
  createManyPlaylist: publicProcedure
    .input(PlaylistCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPlaylist = await ctx.prisma.playlist.createMany(input);
      return createManyPlaylist;
    }),
  createOnePlaylist: publicProcedure
    .input(PlaylistCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePlaylist = await ctx.prisma.playlist.create(input);
      return createOnePlaylist;
    }),
  deleteManyPlaylist: publicProcedure
    .input(PlaylistDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPlaylist = await ctx.prisma.playlist.deleteMany(input);
      return deleteManyPlaylist;
    }),
  deleteOnePlaylist: publicProcedure
    .input(PlaylistDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePlaylist = await ctx.prisma.playlist.delete(input);
      return deleteOnePlaylist;
    }),
  findFirstPlaylist: publicProcedure
    .input(PlaylistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPlaylist = await ctx.prisma.playlist.findFirst(input);
      return findFirstPlaylist;
    }),
  findFirstPlaylistOrThrow: publicProcedure
    .input(PlaylistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPlaylistOrThrow = await ctx.prisma.playlist.findFirstOrThrow(input);
      return findFirstPlaylistOrThrow;
    }),
  findManyPlaylist: publicProcedure
    .input(PlaylistFindManySchema).query(async ({ ctx, input }) => {
      const findManyPlaylist = await ctx.prisma.playlist.findMany(input);
      return findManyPlaylist;
    }),
  findUniquePlaylist: publicProcedure
    .input(PlaylistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePlaylist = await ctx.prisma.playlist.findUnique(input);
      return findUniquePlaylist;
    }),
  findUniquePlaylistOrThrow: publicProcedure
    .input(PlaylistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePlaylistOrThrow = await ctx.prisma.playlist.findUniqueOrThrow(input);
      return findUniquePlaylistOrThrow;
    }),
  groupByPlaylist: publicProcedure
    .input(PlaylistGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPlaylist = await ctx.prisma.playlist.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPlaylist;
    }),
  updateManyPlaylist: publicProcedure
    .input(PlaylistUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPlaylist = await ctx.prisma.playlist.updateMany(input);
      return updateManyPlaylist;
    }),
  updateOnePlaylist: publicProcedure
    .input(PlaylistUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePlaylist = await ctx.prisma.playlist.update(input);
      return updateOnePlaylist;
    }),
  upsertOnePlaylist: publicProcedure
    .input(PlaylistUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePlaylist = await ctx.prisma.playlist.upsert(input);
      return upsertOnePlaylist;
    }),

}) 
