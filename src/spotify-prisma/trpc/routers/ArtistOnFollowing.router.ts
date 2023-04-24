import { t, publicProcedure } from "./helpers/createRouter";
import { ArtistOnFollowingAggregateSchema } from "../schemas/aggregateArtistOnFollowing.schema";
import { ArtistOnFollowingCreateManySchema } from "../schemas/createManyArtistOnFollowing.schema";
import { ArtistOnFollowingCreateOneSchema } from "../schemas/createOneArtistOnFollowing.schema";
import { ArtistOnFollowingDeleteManySchema } from "../schemas/deleteManyArtistOnFollowing.schema";
import { ArtistOnFollowingDeleteOneSchema } from "../schemas/deleteOneArtistOnFollowing.schema";
import { ArtistOnFollowingFindFirstSchema } from "../schemas/findFirstArtistOnFollowing.schema";
import { ArtistOnFollowingFindManySchema } from "../schemas/findManyArtistOnFollowing.schema";
import { ArtistOnFollowingFindUniqueSchema } from "../schemas/findUniqueArtistOnFollowing.schema";
import { ArtistOnFollowingGroupBySchema } from "../schemas/groupByArtistOnFollowing.schema";
import { ArtistOnFollowingUpdateManySchema } from "../schemas/updateManyArtistOnFollowing.schema";
import { ArtistOnFollowingUpdateOneSchema } from "../schemas/updateOneArtistOnFollowing.schema";
import { ArtistOnFollowingUpsertSchema } from "../schemas/upsertOneArtistOnFollowing.schema";

export const artistonfollowingsRouter = t.router({
  aggregateArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateArtistOnFollowing = await ctx.prisma.artistOnFollowing.aggregate(input);
      return aggregateArtistOnFollowing;
    }),
  createManyArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyArtistOnFollowing = await ctx.prisma.artistOnFollowing.createMany(input);
      return createManyArtistOnFollowing;
    }),
  createOneArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneArtistOnFollowing = await ctx.prisma.artistOnFollowing.create(input);
      return createOneArtistOnFollowing;
    }),
  deleteManyArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyArtistOnFollowing = await ctx.prisma.artistOnFollowing.deleteMany(input);
      return deleteManyArtistOnFollowing;
    }),
  deleteOneArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneArtistOnFollowing = await ctx.prisma.artistOnFollowing.delete(input);
      return deleteOneArtistOnFollowing;
    }),
  findFirstArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistOnFollowing = await ctx.prisma.artistOnFollowing.findFirst(input);
      return findFirstArtistOnFollowing;
    }),
  findFirstArtistOnFollowingOrThrow: publicProcedure
    .input(ArtistOnFollowingFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistOnFollowingOrThrow = await ctx.prisma.artistOnFollowing.findFirstOrThrow(input);
      return findFirstArtistOnFollowingOrThrow;
    }),
  findManyArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingFindManySchema).query(async ({ ctx, input }) => {
      const findManyArtistOnFollowing = await ctx.prisma.artistOnFollowing.findMany(input);
      return findManyArtistOnFollowing;
    }),
  findUniqueArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistOnFollowing = await ctx.prisma.artistOnFollowing.findUnique(input);
      return findUniqueArtistOnFollowing;
    }),
  findUniqueArtistOnFollowingOrThrow: publicProcedure
    .input(ArtistOnFollowingFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistOnFollowingOrThrow = await ctx.prisma.artistOnFollowing.findUniqueOrThrow(input);
      return findUniqueArtistOnFollowingOrThrow;
    }),
  groupByArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingGroupBySchema).query(async ({ ctx, input }) => {
      const groupByArtistOnFollowing = await ctx.prisma.artistOnFollowing.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByArtistOnFollowing;
    }),
  updateManyArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyArtistOnFollowing = await ctx.prisma.artistOnFollowing.updateMany(input);
      return updateManyArtistOnFollowing;
    }),
  updateOneArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneArtistOnFollowing = await ctx.prisma.artistOnFollowing.update(input);
      return updateOneArtistOnFollowing;
    }),
  upsertOneArtistOnFollowing: publicProcedure
    .input(ArtistOnFollowingUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneArtistOnFollowing = await ctx.prisma.artistOnFollowing.upsert(input);
      return upsertOneArtistOnFollowing;
    }),

}) 
