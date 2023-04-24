import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateArtistInGenresArgs } from "./args/AggregateArtistInGenresArgs";
import { CreateManyArtistInGenresArgs } from "./args/CreateManyArtistInGenresArgs";
import { CreateOneArtistInGenresArgs } from "./args/CreateOneArtistInGenresArgs";
import { DeleteManyArtistInGenresArgs } from "./args/DeleteManyArtistInGenresArgs";
import { DeleteOneArtistInGenresArgs } from "./args/DeleteOneArtistInGenresArgs";
import { FindFirstArtistInGenresArgs } from "./args/FindFirstArtistInGenresArgs";
import { FindFirstArtistInGenresOrThrowArgs } from "./args/FindFirstArtistInGenresOrThrowArgs";
import { FindManyArtistInGenresArgs } from "./args/FindManyArtistInGenresArgs";
import { FindUniqueArtistInGenresArgs } from "./args/FindUniqueArtistInGenresArgs";
import { FindUniqueArtistInGenresOrThrowArgs } from "./args/FindUniqueArtistInGenresOrThrowArgs";
import { GroupByArtistInGenresArgs } from "./args/GroupByArtistInGenresArgs";
import { UpdateManyArtistInGenresArgs } from "./args/UpdateManyArtistInGenresArgs";
import { UpdateOneArtistInGenresArgs } from "./args/UpdateOneArtistInGenresArgs";
import { UpsertOneArtistInGenresArgs } from "./args/UpsertOneArtistInGenresArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateArtistInGenres } from "../../outputs/AggregateArtistInGenres";
import { ArtistInGenresGroupBy } from "../../outputs/ArtistInGenresGroupBy";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class ArtistInGenresCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateArtistInGenres, {
    nullable: false
  })
  async aggregateArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistInGenresArgs): Promise<AggregateArtistInGenres> {
    return getPrismaFromContext(ctx).artistInGenres.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyArtistInGenresArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistInGenres, {
    nullable: false
  })
  async createOneArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneArtistInGenresArgs): Promise<ArtistInGenres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyArtistInGenresArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistInGenres, {
    nullable: true
  })
  async deleteOneArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneArtistInGenresArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findFirstArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistInGenresArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findFirstArtistInGenresOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistInGenresOrThrowArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ArtistInGenres], {
    nullable: false
  })
  async findManyArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyArtistInGenresArgs): Promise<ArtistInGenres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findUniqueArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistInGenresArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findUniqueArtistInGenresOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistInGenresOrThrowArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ArtistInGenresGroupBy], {
    nullable: false
  })
  async groupByArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistInGenresArgs): Promise<ArtistInGenresGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyArtistInGenresArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistInGenres, {
    nullable: true
  })
  async updateOneArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneArtistInGenresArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistInGenres, {
    nullable: false
  })
  async upsertOneArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneArtistInGenresArgs): Promise<ArtistInGenres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
