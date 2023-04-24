import { t, publicProcedure } from "./helpers/createRouter";
import { AlbumProduceByArtistAggregateSchema } from "../schemas/aggregateAlbumProduceByArtist.schema";
import { AlbumProduceByArtistCreateManySchema } from "../schemas/createManyAlbumProduceByArtist.schema";
import { AlbumProduceByArtistCreateOneSchema } from "../schemas/createOneAlbumProduceByArtist.schema";
import { AlbumProduceByArtistDeleteManySchema } from "../schemas/deleteManyAlbumProduceByArtist.schema";
import { AlbumProduceByArtistDeleteOneSchema } from "../schemas/deleteOneAlbumProduceByArtist.schema";
import { AlbumProduceByArtistFindFirstSchema } from "../schemas/findFirstAlbumProduceByArtist.schema";
import { AlbumProduceByArtistFindManySchema } from "../schemas/findManyAlbumProduceByArtist.schema";
import { AlbumProduceByArtistFindUniqueSchema } from "../schemas/findUniqueAlbumProduceByArtist.schema";
import { AlbumProduceByArtistGroupBySchema } from "../schemas/groupByAlbumProduceByArtist.schema";
import { AlbumProduceByArtistUpdateManySchema } from "../schemas/updateManyAlbumProduceByArtist.schema";
import { AlbumProduceByArtistUpdateOneSchema } from "../schemas/updateOneAlbumProduceByArtist.schema";
import { AlbumProduceByArtistUpsertSchema } from "../schemas/upsertOneAlbumProduceByArtist.schema";

export const albumproducebyartistsRouter = t.router({
  aggregateAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.aggregate(input);
      return aggregateAlbumProduceByArtist;
    }),
  createManyAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.createMany(input);
      return createManyAlbumProduceByArtist;
    }),
  createOneAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.create(input);
      return createOneAlbumProduceByArtist;
    }),
  deleteManyAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.deleteMany(input);
      return deleteManyAlbumProduceByArtist;
    }),
  deleteOneAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.delete(input);
      return deleteOneAlbumProduceByArtist;
    }),
  findFirstAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.findFirst(input);
      return findFirstAlbumProduceByArtist;
    }),
  findFirstAlbumProduceByArtistOrThrow: publicProcedure
    .input(AlbumProduceByArtistFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstAlbumProduceByArtistOrThrow = await ctx.prisma.albumProduceByArtist.findFirstOrThrow(input);
      return findFirstAlbumProduceByArtistOrThrow;
    }),
  findManyAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistFindManySchema).query(async ({ ctx, input }) => {
      const findManyAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.findMany(input);
      return findManyAlbumProduceByArtist;
    }),
  findUniqueAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.findUnique(input);
      return findUniqueAlbumProduceByArtist;
    }),
  findUniqueAlbumProduceByArtistOrThrow: publicProcedure
    .input(AlbumProduceByArtistFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueAlbumProduceByArtistOrThrow = await ctx.prisma.albumProduceByArtist.findUniqueOrThrow(input);
      return findUniqueAlbumProduceByArtistOrThrow;
    }),
  groupByAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistGroupBySchema).query(async ({ ctx, input }) => {
      const groupByAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAlbumProduceByArtist;
    }),
  updateManyAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.updateMany(input);
      return updateManyAlbumProduceByArtist;
    }),
  updateOneAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.update(input);
      return updateOneAlbumProduceByArtist;
    }),
  upsertOneAlbumProduceByArtist: publicProcedure
    .input(AlbumProduceByArtistUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneAlbumProduceByArtist = await ctx.prisma.albumProduceByArtist.upsert(input);
      return upsertOneAlbumProduceByArtist;
    }),

}) 
