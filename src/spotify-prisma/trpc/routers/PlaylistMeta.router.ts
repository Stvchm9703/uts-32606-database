import { t, publicProcedure } from "./helpers/createRouter";
import { PlaylistMetaAggregateSchema } from "../schemas/aggregatePlaylistMeta.schema";
import { PlaylistMetaCreateManySchema } from "../schemas/createManyPlaylistMeta.schema";
import { PlaylistMetaCreateOneSchema } from "../schemas/createOnePlaylistMeta.schema";
import { PlaylistMetaDeleteManySchema } from "../schemas/deleteManyPlaylistMeta.schema";
import { PlaylistMetaDeleteOneSchema } from "../schemas/deleteOnePlaylistMeta.schema";
import { PlaylistMetaFindFirstSchema } from "../schemas/findFirstPlaylistMeta.schema";
import { PlaylistMetaFindManySchema } from "../schemas/findManyPlaylistMeta.schema";
import { PlaylistMetaFindUniqueSchema } from "../schemas/findUniquePlaylistMeta.schema";
import { PlaylistMetaGroupBySchema } from "../schemas/groupByPlaylistMeta.schema";
import { PlaylistMetaUpdateManySchema } from "../schemas/updateManyPlaylistMeta.schema";
import { PlaylistMetaUpdateOneSchema } from "../schemas/updateOnePlaylistMeta.schema";
import { PlaylistMetaUpsertSchema } from "../schemas/upsertOnePlaylistMeta.schema";

export const playlistmetasRouter = t.router({
  aggregatePlaylistMeta: publicProcedure
    .input(PlaylistMetaAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePlaylistMeta = await ctx.prisma.playlistMeta.aggregate(input);
      return aggregatePlaylistMeta;
    }),
  createManyPlaylistMeta: publicProcedure
    .input(PlaylistMetaCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPlaylistMeta = await ctx.prisma.playlistMeta.createMany(input);
      return createManyPlaylistMeta;
    }),
  createOnePlaylistMeta: publicProcedure
    .input(PlaylistMetaCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePlaylistMeta = await ctx.prisma.playlistMeta.create(input);
      return createOnePlaylistMeta;
    }),
  deleteManyPlaylistMeta: publicProcedure
    .input(PlaylistMetaDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPlaylistMeta = await ctx.prisma.playlistMeta.deleteMany(input);
      return deleteManyPlaylistMeta;
    }),
  deleteOnePlaylistMeta: publicProcedure
    .input(PlaylistMetaDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePlaylistMeta = await ctx.prisma.playlistMeta.delete(input);
      return deleteOnePlaylistMeta;
    }),
  findFirstPlaylistMeta: publicProcedure
    .input(PlaylistMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPlaylistMeta = await ctx.prisma.playlistMeta.findFirst(input);
      return findFirstPlaylistMeta;
    }),
  findFirstPlaylistMetaOrThrow: publicProcedure
    .input(PlaylistMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPlaylistMetaOrThrow = await ctx.prisma.playlistMeta.findFirstOrThrow(input);
      return findFirstPlaylistMetaOrThrow;
    }),
  findManyPlaylistMeta: publicProcedure
    .input(PlaylistMetaFindManySchema).query(async ({ ctx, input }) => {
      const findManyPlaylistMeta = await ctx.prisma.playlistMeta.findMany(input);
      return findManyPlaylistMeta;
    }),
  findUniquePlaylistMeta: publicProcedure
    .input(PlaylistMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePlaylistMeta = await ctx.prisma.playlistMeta.findUnique(input);
      return findUniquePlaylistMeta;
    }),
  findUniquePlaylistMetaOrThrow: publicProcedure
    .input(PlaylistMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePlaylistMetaOrThrow = await ctx.prisma.playlistMeta.findUniqueOrThrow(input);
      return findUniquePlaylistMetaOrThrow;
    }),
  groupByPlaylistMeta: publicProcedure
    .input(PlaylistMetaGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPlaylistMeta = await ctx.prisma.playlistMeta.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPlaylistMeta;
    }),
  updateManyPlaylistMeta: publicProcedure
    .input(PlaylistMetaUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPlaylistMeta = await ctx.prisma.playlistMeta.updateMany(input);
      return updateManyPlaylistMeta;
    }),
  updateOnePlaylistMeta: publicProcedure
    .input(PlaylistMetaUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePlaylistMeta = await ctx.prisma.playlistMeta.update(input);
      return updateOnePlaylistMeta;
    }),
  upsertOnePlaylistMeta: publicProcedure
    .input(PlaylistMetaUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePlaylistMeta = await ctx.prisma.playlistMeta.upsert(input);
      return upsertOnePlaylistMeta;
    }),

}) 
