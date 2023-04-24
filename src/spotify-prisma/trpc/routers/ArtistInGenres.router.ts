import { t, publicProcedure } from "./helpers/createRouter";
import { ArtistInGenresAggregateSchema } from "../schemas/aggregateArtistInGenres.schema";
import { ArtistInGenresCreateManySchema } from "../schemas/createManyArtistInGenres.schema";
import { ArtistInGenresCreateOneSchema } from "../schemas/createOneArtistInGenres.schema";
import { ArtistInGenresDeleteManySchema } from "../schemas/deleteManyArtistInGenres.schema";
import { ArtistInGenresDeleteOneSchema } from "../schemas/deleteOneArtistInGenres.schema";
import { ArtistInGenresFindFirstSchema } from "../schemas/findFirstArtistInGenres.schema";
import { ArtistInGenresFindManySchema } from "../schemas/findManyArtistInGenres.schema";
import { ArtistInGenresFindUniqueSchema } from "../schemas/findUniqueArtistInGenres.schema";
import { ArtistInGenresGroupBySchema } from "../schemas/groupByArtistInGenres.schema";
import { ArtistInGenresUpdateManySchema } from "../schemas/updateManyArtistInGenres.schema";
import { ArtistInGenresUpdateOneSchema } from "../schemas/updateOneArtistInGenres.schema";
import { ArtistInGenresUpsertSchema } from "../schemas/upsertOneArtistInGenres.schema";

export const artistingenresRouter = t.router({
  aggregateArtistInGenres: publicProcedure
    .input(ArtistInGenresAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateArtistInGenres = await ctx.prisma.artistInGenres.aggregate(input);
      return aggregateArtistInGenres;
    }),
  createManyArtistInGenres: publicProcedure
    .input(ArtistInGenresCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyArtistInGenres = await ctx.prisma.artistInGenres.createMany(input);
      return createManyArtistInGenres;
    }),
  createOneArtistInGenres: publicProcedure
    .input(ArtistInGenresCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneArtistInGenres = await ctx.prisma.artistInGenres.create(input);
      return createOneArtistInGenres;
    }),
  deleteManyArtistInGenres: publicProcedure
    .input(ArtistInGenresDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyArtistInGenres = await ctx.prisma.artistInGenres.deleteMany(input);
      return deleteManyArtistInGenres;
    }),
  deleteOneArtistInGenres: publicProcedure
    .input(ArtistInGenresDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneArtistInGenres = await ctx.prisma.artistInGenres.delete(input);
      return deleteOneArtistInGenres;
    }),
  findFirstArtistInGenres: publicProcedure
    .input(ArtistInGenresFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistInGenres = await ctx.prisma.artistInGenres.findFirst(input);
      return findFirstArtistInGenres;
    }),
  findFirstArtistInGenresOrThrow: publicProcedure
    .input(ArtistInGenresFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstArtistInGenresOrThrow = await ctx.prisma.artistInGenres.findFirstOrThrow(input);
      return findFirstArtistInGenresOrThrow;
    }),
  findManyArtistInGenres: publicProcedure
    .input(ArtistInGenresFindManySchema).query(async ({ ctx, input }) => {
      const findManyArtistInGenres = await ctx.prisma.artistInGenres.findMany(input);
      return findManyArtistInGenres;
    }),
  findUniqueArtistInGenres: publicProcedure
    .input(ArtistInGenresFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistInGenres = await ctx.prisma.artistInGenres.findUnique(input);
      return findUniqueArtistInGenres;
    }),
  findUniqueArtistInGenresOrThrow: publicProcedure
    .input(ArtistInGenresFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueArtistInGenresOrThrow = await ctx.prisma.artistInGenres.findUniqueOrThrow(input);
      return findUniqueArtistInGenresOrThrow;
    }),
  groupByArtistInGenres: publicProcedure
    .input(ArtistInGenresGroupBySchema).query(async ({ ctx, input }) => {
      const groupByArtistInGenres = await ctx.prisma.artistInGenres.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByArtistInGenres;
    }),
  updateManyArtistInGenres: publicProcedure
    .input(ArtistInGenresUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyArtistInGenres = await ctx.prisma.artistInGenres.updateMany(input);
      return updateManyArtistInGenres;
    }),
  updateOneArtistInGenres: publicProcedure
    .input(ArtistInGenresUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneArtistInGenres = await ctx.prisma.artistInGenres.update(input);
      return updateOneArtistInGenres;
    }),
  upsertOneArtistInGenres: publicProcedure
    .input(ArtistInGenresUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneArtistInGenres = await ctx.prisma.artistInGenres.upsert(input);
      return upsertOneArtistInGenres;
    }),

}) 
