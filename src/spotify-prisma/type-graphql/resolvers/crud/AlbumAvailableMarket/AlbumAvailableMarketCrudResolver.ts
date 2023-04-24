import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAlbumAvailableMarketArgs } from "./args/AggregateAlbumAvailableMarketArgs";
import { CreateManyAlbumAvailableMarketArgs } from "./args/CreateManyAlbumAvailableMarketArgs";
import { CreateOneAlbumAvailableMarketArgs } from "./args/CreateOneAlbumAvailableMarketArgs";
import { DeleteManyAlbumAvailableMarketArgs } from "./args/DeleteManyAlbumAvailableMarketArgs";
import { DeleteOneAlbumAvailableMarketArgs } from "./args/DeleteOneAlbumAvailableMarketArgs";
import { FindFirstAlbumAvailableMarketArgs } from "./args/FindFirstAlbumAvailableMarketArgs";
import { FindFirstAlbumAvailableMarketOrThrowArgs } from "./args/FindFirstAlbumAvailableMarketOrThrowArgs";
import { FindManyAlbumAvailableMarketArgs } from "./args/FindManyAlbumAvailableMarketArgs";
import { FindUniqueAlbumAvailableMarketArgs } from "./args/FindUniqueAlbumAvailableMarketArgs";
import { FindUniqueAlbumAvailableMarketOrThrowArgs } from "./args/FindUniqueAlbumAvailableMarketOrThrowArgs";
import { GroupByAlbumAvailableMarketArgs } from "./args/GroupByAlbumAvailableMarketArgs";
import { UpdateManyAlbumAvailableMarketArgs } from "./args/UpdateManyAlbumAvailableMarketArgs";
import { UpdateOneAlbumAvailableMarketArgs } from "./args/UpdateOneAlbumAvailableMarketArgs";
import { UpsertOneAlbumAvailableMarketArgs } from "./args/UpsertOneAlbumAvailableMarketArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAlbumAvailableMarket } from "../../outputs/AggregateAlbumAvailableMarket";
import { AlbumAvailableMarketGroupBy } from "../../outputs/AlbumAvailableMarketGroupBy";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class AlbumAvailableMarketCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAlbumAvailableMarket, {
    nullable: false
  })
  async aggregateAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAlbumAvailableMarketArgs): Promise<AggregateAlbumAvailableMarket> {
    return getPrismaFromContext(ctx).albumAvailableMarket.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAlbumAvailableMarketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumAvailableMarket, {
    nullable: false
  })
  async createOneAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAlbumAvailableMarketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async deleteOneAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async findFirstAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async findFirstAlbumAvailableMarketOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAlbumAvailableMarketOrThrowArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AlbumAvailableMarket], {
    nullable: false
  })
  async albumAvailableMarkets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async albumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async getAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAlbumAvailableMarketOrThrowArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AlbumAvailableMarketGroupBy], {
    nullable: false
  })
  async groupByAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAlbumAvailableMarketArgs): Promise<AlbumAvailableMarketGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAlbumAvailableMarketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async updateOneAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumAvailableMarket, {
    nullable: false
  })
  async upsertOneAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
