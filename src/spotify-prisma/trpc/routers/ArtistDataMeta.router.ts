import { t, publicProcedure } from "./helpers/createRouter";
import { ArtistDataMetaAggregateSchema } from "../schemas/aggregateArtistDataMeta.schema";
import { ArtistDataMetaCreateManySchema } from "../schemas/createManyArtistDataMeta.schema";
import { ArtistDataMetaCreateOneSchema } from "../schemas/createOneArtistDataMeta.schema";
import { ArtistDataMetaDeleteManySchema } from "../schemas/deleteManyArtistDataMeta.schema";
import { ArtistDataMetaDeleteOneSchema } from "../schemas/deleteOneArtistDataMeta.schema";
import { ArtistDataMetaFindFirstSchema } from "../schemas/findFirstArtistDataMeta.schema";
import { ArtistDataMetaFindManySchema } from "../schemas/findManyArtistDataMeta.schema";
import { ArtistDataMetaFindUniqueSchema } from "../schemas/findUniqueArtistDataMeta.schema";
import { ArtistDataMetaGroupBySchema } from "../schemas/groupByArtistDataMeta.schema";
import { ArtistDataMetaUpdateManySchema } from "../schemas/updateManyArtistDataMeta.schema";
import { ArtistDataMetaUpdateOneSchema } from "../schemas/updateOneArtistDataMeta.schema";
import { ArtistDataMetaUpsertSchema } from "../schemas/upsertOneArtistDataMeta.schema";

export const artistdatametasRouter = t.router({
  aggregateArtistDataMeta: publicProcedure
    .input(ArtistDataMetaAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateArtistDataMeta = await ctx.prisma.artistDataMeta.aggregate(input);
      return aggregateArtistDataMeta;
    }),
  createManyArtistDataMeta: publicProcedure
    .input(ArtistDataMetaCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyArtistDataMeta = await ctx.prisma.artistDataMeta.createMany(input);
      return createManyArtistDataMeta;
    }),
  createOneArtistDataMeta: publicProcedure
    .input(ArtistDataMetaCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneArtistDataMeta = await ctx.prisma.artistDataMeta.create(input);
      return createOneArtistDataMeta;
    }),
  deleteManyArtistDataMeta: publicProcedure
    .input(ArtistDataMetaDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyArtistDataMeta = await ctx.prisma.artistDataMeta.deleteMany(input);
      return deleteManyArtistDataMeta;
    }),
  deleteOneArtistDataMeta: publicProcedure
    .input(ArtistDataMetaDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneArtistDataMeta = await ctx.prisma.artistDataMeta.delete(input);
      return deleteOneArtistDataMeta;
    }),
  findFirstArtistDataMeta: publicProcedure
    .input(ArtistDataMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistDataMeta = await ctx.prisma.artistDataMeta.findFirst(input);
      return findFirstArtistDataMeta;
    }),
  findFirstArtistDataMetaOrThrow: publicProcedure
    .input(ArtistDataMetaFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistDataMetaOrThrow = await ctx.prisma.artistDataMeta.findFirstOrThrow(input);
      return findFirstArtistDataMetaOrThrow;
    }),
  findManyArtistDataMeta: publicProcedure
    .input(ArtistDataMetaFindManySchema).query(async ({ ctx, input }) => {
      const findManyArtistDataMeta = await ctx.prisma.artistDataMeta.findMany(input);
      return findManyArtistDataMeta;
    }),
  findUniqueArtistDataMeta: publicProcedure
    .input(ArtistDataMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistDataMeta = await ctx.prisma.artistDataMeta.findUnique(input);
      return findUniqueArtistDataMeta;
    }),
  findUniqueArtistDataMetaOrThrow: publicProcedure
    .input(ArtistDataMetaFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistDataMetaOrThrow = await ctx.prisma.artistDataMeta.findUniqueOrThrow(input);
      return findUniqueArtistDataMetaOrThrow;
    }),
  groupByArtistDataMeta: publicProcedure
    .input(ArtistDataMetaGroupBySchema).query(async ({ ctx, input }) => {
      const groupByArtistDataMeta = await ctx.prisma.artistDataMeta.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByArtistDataMeta;
    }),
  updateManyArtistDataMeta: publicProcedure
    .input(ArtistDataMetaUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyArtistDataMeta = await ctx.prisma.artistDataMeta.updateMany(input);
      return updateManyArtistDataMeta;
    }),
  updateOneArtistDataMeta: publicProcedure
    .input(ArtistDataMetaUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneArtistDataMeta = await ctx.prisma.artistDataMeta.update(input);
      return updateOneArtistDataMeta;
    }),
  upsertOneArtistDataMeta: publicProcedure
    .input(ArtistDataMetaUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneArtistDataMeta = await ctx.prisma.artistDataMeta.upsert(input);
      return upsertOneArtistDataMeta;
    }),

}) 
