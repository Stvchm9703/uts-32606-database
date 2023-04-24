import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTracksOnPlaylistArgs } from "./args/AggregateTracksOnPlaylistArgs";
import { CreateManyTracksOnPlaylistArgs } from "./args/CreateManyTracksOnPlaylistArgs";
import { CreateOneTracksOnPlaylistArgs } from "./args/CreateOneTracksOnPlaylistArgs";
import { DeleteManyTracksOnPlaylistArgs } from "./args/DeleteManyTracksOnPlaylistArgs";
import { DeleteOneTracksOnPlaylistArgs } from "./args/DeleteOneTracksOnPlaylistArgs";
import { FindFirstTracksOnPlaylistArgs } from "./args/FindFirstTracksOnPlaylistArgs";
import { FindFirstTracksOnPlaylistOrThrowArgs } from "./args/FindFirstTracksOnPlaylistOrThrowArgs";
import { FindManyTracksOnPlaylistArgs } from "./args/FindManyTracksOnPlaylistArgs";
import { FindUniqueTracksOnPlaylistArgs } from "./args/FindUniqueTracksOnPlaylistArgs";
import { FindUniqueTracksOnPlaylistOrThrowArgs } from "./args/FindUniqueTracksOnPlaylistOrThrowArgs";
import { GroupByTracksOnPlaylistArgs } from "./args/GroupByTracksOnPlaylistArgs";
import { UpdateManyTracksOnPlaylistArgs } from "./args/UpdateManyTracksOnPlaylistArgs";
import { UpdateOneTracksOnPlaylistArgs } from "./args/UpdateOneTracksOnPlaylistArgs";
import { UpsertOneTracksOnPlaylistArgs } from "./args/UpsertOneTracksOnPlaylistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTracksOnPlaylist } from "../../outputs/AggregateTracksOnPlaylist";
import { TracksOnPlaylistGroupBy } from "../../outputs/TracksOnPlaylistGroupBy";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class TracksOnPlaylistCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTracksOnPlaylist, {
    nullable: false
  })
  async aggregateTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTracksOnPlaylistArgs): Promise<AggregateTracksOnPlaylist> {
    return getPrismaFromContext(ctx).tracksOnPlaylist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTracksOnPlaylistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksOnPlaylist, {
    nullable: false
  })
  async createOneTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTracksOnPlaylistArgs): Promise<TracksOnPlaylist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTracksOnPlaylistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async deleteOneTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTracksOnPlaylistArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async findFirstTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTracksOnPlaylistArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async findFirstTracksOnPlaylistOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTracksOnPlaylistOrThrowArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TracksOnPlaylist], {
    nullable: false
  })
  async tracksOnPlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTracksOnPlaylistArgs): Promise<TracksOnPlaylist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async tracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksOnPlaylistArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async getTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksOnPlaylistOrThrowArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TracksOnPlaylistGroupBy], {
    nullable: false
  })
  async groupByTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTracksOnPlaylistArgs): Promise<TracksOnPlaylistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTracksOnPlaylistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async updateOneTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTracksOnPlaylistArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksOnPlaylist, {
    nullable: false
  })
  async upsertOneTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTracksOnPlaylistArgs): Promise<TracksOnPlaylist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
