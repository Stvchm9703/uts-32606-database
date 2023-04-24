import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePlaylistOnFollowerArgs } from "./args/AggregatePlaylistOnFollowerArgs";
import { CreateManyPlaylistOnFollowerArgs } from "./args/CreateManyPlaylistOnFollowerArgs";
import { CreateOnePlaylistOnFollowerArgs } from "./args/CreateOnePlaylistOnFollowerArgs";
import { DeleteManyPlaylistOnFollowerArgs } from "./args/DeleteManyPlaylistOnFollowerArgs";
import { DeleteOnePlaylistOnFollowerArgs } from "./args/DeleteOnePlaylistOnFollowerArgs";
import { FindFirstPlaylistOnFollowerArgs } from "./args/FindFirstPlaylistOnFollowerArgs";
import { FindFirstPlaylistOnFollowerOrThrowArgs } from "./args/FindFirstPlaylistOnFollowerOrThrowArgs";
import { FindManyPlaylistOnFollowerArgs } from "./args/FindManyPlaylistOnFollowerArgs";
import { FindUniquePlaylistOnFollowerArgs } from "./args/FindUniquePlaylistOnFollowerArgs";
import { FindUniquePlaylistOnFollowerOrThrowArgs } from "./args/FindUniquePlaylistOnFollowerOrThrowArgs";
import { GroupByPlaylistOnFollowerArgs } from "./args/GroupByPlaylistOnFollowerArgs";
import { UpdateManyPlaylistOnFollowerArgs } from "./args/UpdateManyPlaylistOnFollowerArgs";
import { UpdateOnePlaylistOnFollowerArgs } from "./args/UpdateOnePlaylistOnFollowerArgs";
import { UpsertOnePlaylistOnFollowerArgs } from "./args/UpsertOnePlaylistOnFollowerArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePlaylistOnFollower } from "../../outputs/AggregatePlaylistOnFollower";
import { PlaylistOnFollowerGroupBy } from "../../outputs/PlaylistOnFollowerGroupBy";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class PlaylistOnFollowerCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePlaylistOnFollower, {
    nullable: false
  })
  async aggregatePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlaylistOnFollowerArgs): Promise<AggregatePlaylistOnFollower> {
    return getPrismaFromContext(ctx).playlistOnFollower.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPlaylistOnFollowerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlaylistOnFollower, {
    nullable: false
  })
  async createOnePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePlaylistOnFollowerArgs): Promise<PlaylistOnFollower> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPlaylistOnFollowerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async deleteOnePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePlaylistOnFollowerArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async findFirstPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPlaylistOnFollowerArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async findFirstPlaylistOnFollowerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPlaylistOnFollowerOrThrowArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PlaylistOnFollower], {
    nullable: false
  })
  async playlistOnFollowers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPlaylistOnFollowerArgs): Promise<PlaylistOnFollower[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async playlistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePlaylistOnFollowerArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async getPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePlaylistOnFollowerOrThrowArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PlaylistOnFollowerGroupBy], {
    nullable: false
  })
  async groupByPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlaylistOnFollowerArgs): Promise<PlaylistOnFollowerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPlaylistOnFollowerArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async updateOnePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePlaylistOnFollowerArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlaylistOnFollower, {
    nullable: false
  })
  async upsertOnePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePlaylistOnFollowerArgs): Promise<PlaylistOnFollower> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
