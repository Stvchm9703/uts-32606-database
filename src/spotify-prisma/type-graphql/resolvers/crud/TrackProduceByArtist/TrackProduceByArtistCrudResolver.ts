import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTrackProduceByArtistArgs } from "./args/AggregateTrackProduceByArtistArgs";
import { CreateManyTrackProduceByArtistArgs } from "./args/CreateManyTrackProduceByArtistArgs";
import { CreateOneTrackProduceByArtistArgs } from "./args/CreateOneTrackProduceByArtistArgs";
import { DeleteManyTrackProduceByArtistArgs } from "./args/DeleteManyTrackProduceByArtistArgs";
import { DeleteOneTrackProduceByArtistArgs } from "./args/DeleteOneTrackProduceByArtistArgs";
import { FindFirstTrackProduceByArtistArgs } from "./args/FindFirstTrackProduceByArtistArgs";
import { FindFirstTrackProduceByArtistOrThrowArgs } from "./args/FindFirstTrackProduceByArtistOrThrowArgs";
import { FindManyTrackProduceByArtistArgs } from "./args/FindManyTrackProduceByArtistArgs";
import { FindUniqueTrackProduceByArtistArgs } from "./args/FindUniqueTrackProduceByArtistArgs";
import { FindUniqueTrackProduceByArtistOrThrowArgs } from "./args/FindUniqueTrackProduceByArtistOrThrowArgs";
import { GroupByTrackProduceByArtistArgs } from "./args/GroupByTrackProduceByArtistArgs";
import { UpdateManyTrackProduceByArtistArgs } from "./args/UpdateManyTrackProduceByArtistArgs";
import { UpdateOneTrackProduceByArtistArgs } from "./args/UpdateOneTrackProduceByArtistArgs";
import { UpsertOneTrackProduceByArtistArgs } from "./args/UpsertOneTrackProduceByArtistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTrackProduceByArtist } from "../../outputs/AggregateTrackProduceByArtist";
import { TrackProduceByArtistGroupBy } from "../../outputs/TrackProduceByArtistGroupBy";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class TrackProduceByArtistCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTrackProduceByArtist, {
    nullable: false
  })
  async aggregateTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrackProduceByArtistArgs): Promise<AggregateTrackProduceByArtist> {
    return getPrismaFromContext(ctx).trackProduceByArtist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTrackProduceByArtistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrackProduceByArtist, {
    nullable: false
  })
  async createOneTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTrackProduceByArtistArgs): Promise<TrackProduceByArtist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTrackProduceByArtistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async deleteOneTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTrackProduceByArtistArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async findFirstTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTrackProduceByArtistArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async findFirstTrackProduceByArtistOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTrackProduceByArtistOrThrowArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TrackProduceByArtist], {
    nullable: false
  })
  async trackProduceByArtists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTrackProduceByArtistArgs): Promise<TrackProduceByArtist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async trackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTrackProduceByArtistArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async getTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTrackProduceByArtistOrThrowArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TrackProduceByArtistGroupBy], {
    nullable: false
  })
  async groupByTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTrackProduceByArtistArgs): Promise<TrackProduceByArtistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTrackProduceByArtistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async updateOneTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTrackProduceByArtistArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TrackProduceByArtist, {
    nullable: false
  })
  async upsertOneTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTrackProduceByArtistArgs): Promise<TrackProduceByArtist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
