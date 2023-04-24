import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTracksAvailableMarketArgs } from "./args/AggregateTracksAvailableMarketArgs";
import { CreateManyTracksAvailableMarketArgs } from "./args/CreateManyTracksAvailableMarketArgs";
import { CreateOneTracksAvailableMarketArgs } from "./args/CreateOneTracksAvailableMarketArgs";
import { DeleteManyTracksAvailableMarketArgs } from "./args/DeleteManyTracksAvailableMarketArgs";
import { DeleteOneTracksAvailableMarketArgs } from "./args/DeleteOneTracksAvailableMarketArgs";
import { FindFirstTracksAvailableMarketArgs } from "./args/FindFirstTracksAvailableMarketArgs";
import { FindFirstTracksAvailableMarketOrThrowArgs } from "./args/FindFirstTracksAvailableMarketOrThrowArgs";
import { FindManyTracksAvailableMarketArgs } from "./args/FindManyTracksAvailableMarketArgs";
import { FindUniqueTracksAvailableMarketArgs } from "./args/FindUniqueTracksAvailableMarketArgs";
import { FindUniqueTracksAvailableMarketOrThrowArgs } from "./args/FindUniqueTracksAvailableMarketOrThrowArgs";
import { GroupByTracksAvailableMarketArgs } from "./args/GroupByTracksAvailableMarketArgs";
import { UpdateManyTracksAvailableMarketArgs } from "./args/UpdateManyTracksAvailableMarketArgs";
import { UpdateOneTracksAvailableMarketArgs } from "./args/UpdateOneTracksAvailableMarketArgs";
import { UpsertOneTracksAvailableMarketArgs } from "./args/UpsertOneTracksAvailableMarketArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTracksAvailableMarket } from "../../outputs/AggregateTracksAvailableMarket";
import { TracksAvailableMarketGroupBy } from "../../outputs/TracksAvailableMarketGroupBy";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class TracksAvailableMarketCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTracksAvailableMarket, {
    nullable: false
  })
  async aggregateTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTracksAvailableMarketArgs): Promise<AggregateTracksAvailableMarket> {
    return getPrismaFromContext(ctx).tracksAvailableMarket.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTracksAvailableMarketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksAvailableMarket, {
    nullable: false
  })
  async createOneTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTracksAvailableMarketArgs): Promise<TracksAvailableMarket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTracksAvailableMarketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async deleteOneTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTracksAvailableMarketArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async findFirstTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTracksAvailableMarketArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async findFirstTracksAvailableMarketOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTracksAvailableMarketOrThrowArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TracksAvailableMarket], {
    nullable: false
  })
  async tracksAvailableMarkets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTracksAvailableMarketArgs): Promise<TracksAvailableMarket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async tracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksAvailableMarketArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async getTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksAvailableMarketOrThrowArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TracksAvailableMarketGroupBy], {
    nullable: false
  })
  async groupByTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTracksAvailableMarketArgs): Promise<TracksAvailableMarketGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTracksAvailableMarketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async updateOneTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTracksAvailableMarketArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TracksAvailableMarket, {
    nullable: false
  })
  async upsertOneTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTracksAvailableMarketArgs): Promise<TracksAvailableMarket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
