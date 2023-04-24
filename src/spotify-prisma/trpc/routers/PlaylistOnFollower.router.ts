import { t, publicProcedure } from "./helpers/createRouter";
import { PlaylistOnFollowerAggregateSchema } from "../schemas/aggregatePlaylistOnFollower.schema";
import { PlaylistOnFollowerCreateManySchema } from "../schemas/createManyPlaylistOnFollower.schema";
import { PlaylistOnFollowerCreateOneSchema } from "../schemas/createOnePlaylistOnFollower.schema";
import { PlaylistOnFollowerDeleteManySchema } from "../schemas/deleteManyPlaylistOnFollower.schema";
import { PlaylistOnFollowerDeleteOneSchema } from "../schemas/deleteOnePlaylistOnFollower.schema";
import { PlaylistOnFollowerFindFirstSchema } from "../schemas/findFirstPlaylistOnFollower.schema";
import { PlaylistOnFollowerFindManySchema } from "../schemas/findManyPlaylistOnFollower.schema";
import { PlaylistOnFollowerFindUniqueSchema } from "../schemas/findUniquePlaylistOnFollower.schema";
import { PlaylistOnFollowerGroupBySchema } from "../schemas/groupByPlaylistOnFollower.schema";
import { PlaylistOnFollowerUpdateManySchema } from "../schemas/updateManyPlaylistOnFollower.schema";
import { PlaylistOnFollowerUpdateOneSchema } from "../schemas/updateOnePlaylistOnFollower.schema";
import { PlaylistOnFollowerUpsertSchema } from "../schemas/upsertOnePlaylistOnFollower.schema";

export const playlistonfollowersRouter = t.router({
  aggregatePlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePlaylistOnFollower = await ctx.prisma.playlistOnFollower.aggregate(input);
      return aggregatePlaylistOnFollower;
    }),
  createManyPlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPlaylistOnFollower = await ctx.prisma.playlistOnFollower.createMany(input);
      return createManyPlaylistOnFollower;
    }),
  createOnePlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePlaylistOnFollower = await ctx.prisma.playlistOnFollower.create(input);
      return createOnePlaylistOnFollower;
    }),
  deleteManyPlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPlaylistOnFollower = await ctx.prisma.playlistOnFollower.deleteMany(input);
      return deleteManyPlaylistOnFollower;
    }),
  deleteOnePlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePlaylistOnFollower = await ctx.prisma.playlistOnFollower.delete(input);
      return deleteOnePlaylistOnFollower;
    }),
  findFirstPlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPlaylistOnFollower = await ctx.prisma.playlistOnFollower.findFirst(input);
      return findFirstPlaylistOnFollower;
    }),
  findFirstPlaylistOnFollowerOrThrow: publicProcedure
    .input(PlaylistOnFollowerFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPlaylistOnFollowerOrThrow = await ctx.prisma.playlistOnFollower.findFirstOrThrow(input);
      return findFirstPlaylistOnFollowerOrThrow;
    }),
  findManyPlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerFindManySchema).query(async ({ ctx, input }) => {
      const findManyPlaylistOnFollower = await ctx.prisma.playlistOnFollower.findMany(input);
      return findManyPlaylistOnFollower;
    }),
  findUniquePlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePlaylistOnFollower = await ctx.prisma.playlistOnFollower.findUnique(input);
      return findUniquePlaylistOnFollower;
    }),
  findUniquePlaylistOnFollowerOrThrow: publicProcedure
    .input(PlaylistOnFollowerFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePlaylistOnFollowerOrThrow = await ctx.prisma.playlistOnFollower.findUniqueOrThrow(input);
      return findUniquePlaylistOnFollowerOrThrow;
    }),
  groupByPlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPlaylistOnFollower = await ctx.prisma.playlistOnFollower.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPlaylistOnFollower;
    }),
  updateManyPlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPlaylistOnFollower = await ctx.prisma.playlistOnFollower.updateMany(input);
      return updateManyPlaylistOnFollower;
    }),
  updateOnePlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePlaylistOnFollower = await ctx.prisma.playlistOnFollower.update(input);
      return updateOnePlaylistOnFollower;
    }),
  upsertOnePlaylistOnFollower: publicProcedure
    .input(PlaylistOnFollowerUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePlaylistOnFollower = await ctx.prisma.playlistOnFollower.upsert(input);
      return upsertOnePlaylistOnFollower;
    }),

}) 
