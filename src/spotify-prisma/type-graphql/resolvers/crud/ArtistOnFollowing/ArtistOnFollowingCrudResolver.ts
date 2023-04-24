import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateArtistOnFollowingArgs } from "./args/AggregateArtistOnFollowingArgs";
import { CreateManyArtistOnFollowingArgs } from "./args/CreateManyArtistOnFollowingArgs";
import { CreateOneArtistOnFollowingArgs } from "./args/CreateOneArtistOnFollowingArgs";
import { DeleteManyArtistOnFollowingArgs } from "./args/DeleteManyArtistOnFollowingArgs";
import { DeleteOneArtistOnFollowingArgs } from "./args/DeleteOneArtistOnFollowingArgs";
import { FindFirstArtistOnFollowingArgs } from "./args/FindFirstArtistOnFollowingArgs";
import { FindFirstArtistOnFollowingOrThrowArgs } from "./args/FindFirstArtistOnFollowingOrThrowArgs";
import { FindManyArtistOnFollowingArgs } from "./args/FindManyArtistOnFollowingArgs";
import { FindUniqueArtistOnFollowingArgs } from "./args/FindUniqueArtistOnFollowingArgs";
import { FindUniqueArtistOnFollowingOrThrowArgs } from "./args/FindUniqueArtistOnFollowingOrThrowArgs";
import { GroupByArtistOnFollowingArgs } from "./args/GroupByArtistOnFollowingArgs";
import { UpdateManyArtistOnFollowingArgs } from "./args/UpdateManyArtistOnFollowingArgs";
import { UpdateOneArtistOnFollowingArgs } from "./args/UpdateOneArtistOnFollowingArgs";
import { UpsertOneArtistOnFollowingArgs } from "./args/UpsertOneArtistOnFollowingArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateArtistOnFollowing } from "../../outputs/AggregateArtistOnFollowing";
import { ArtistOnFollowingGroupBy } from "../../outputs/ArtistOnFollowingGroupBy";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class ArtistOnFollowingCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateArtistOnFollowing, {
    nullable: false
  })
  async aggregateArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistOnFollowingArgs): Promise<AggregateArtistOnFollowing> {
    return getPrismaFromContext(ctx).artistOnFollowing.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyArtistOnFollowingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistOnFollowing, {
    nullable: false
  })
  async createOneArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneArtistOnFollowingArgs): Promise<ArtistOnFollowing> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyArtistOnFollowingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async deleteOneArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneArtistOnFollowingArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async findFirstArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistOnFollowingArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async findFirstArtistOnFollowingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistOnFollowingOrThrowArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ArtistOnFollowing], {
    nullable: false
  })
  async artistOnFollowings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyArtistOnFollowingArgs): Promise<ArtistOnFollowing[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async artistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistOnFollowingArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async getArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistOnFollowingOrThrowArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ArtistOnFollowingGroupBy], {
    nullable: false
  })
  async groupByArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistOnFollowingArgs): Promise<ArtistOnFollowingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyArtistOnFollowingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async updateOneArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneArtistOnFollowingArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistOnFollowing, {
    nullable: false
  })
  async upsertOneArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneArtistOnFollowingArgs): Promise<ArtistOnFollowing> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
