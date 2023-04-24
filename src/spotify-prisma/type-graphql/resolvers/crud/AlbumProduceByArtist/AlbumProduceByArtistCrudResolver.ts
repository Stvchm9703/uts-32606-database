import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAlbumProduceByArtistArgs } from "./args/AggregateAlbumProduceByArtistArgs";
import { CreateManyAlbumProduceByArtistArgs } from "./args/CreateManyAlbumProduceByArtistArgs";
import { CreateOneAlbumProduceByArtistArgs } from "./args/CreateOneAlbumProduceByArtistArgs";
import { DeleteManyAlbumProduceByArtistArgs } from "./args/DeleteManyAlbumProduceByArtistArgs";
import { DeleteOneAlbumProduceByArtistArgs } from "./args/DeleteOneAlbumProduceByArtistArgs";
import { FindFirstAlbumProduceByArtistArgs } from "./args/FindFirstAlbumProduceByArtistArgs";
import { FindFirstAlbumProduceByArtistOrThrowArgs } from "./args/FindFirstAlbumProduceByArtistOrThrowArgs";
import { FindManyAlbumProduceByArtistArgs } from "./args/FindManyAlbumProduceByArtistArgs";
import { FindUniqueAlbumProduceByArtistArgs } from "./args/FindUniqueAlbumProduceByArtistArgs";
import { FindUniqueAlbumProduceByArtistOrThrowArgs } from "./args/FindUniqueAlbumProduceByArtistOrThrowArgs";
import { GroupByAlbumProduceByArtistArgs } from "./args/GroupByAlbumProduceByArtistArgs";
import { UpdateManyAlbumProduceByArtistArgs } from "./args/UpdateManyAlbumProduceByArtistArgs";
import { UpdateOneAlbumProduceByArtistArgs } from "./args/UpdateOneAlbumProduceByArtistArgs";
import { UpsertOneAlbumProduceByArtistArgs } from "./args/UpsertOneAlbumProduceByArtistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAlbumProduceByArtist } from "../../outputs/AggregateAlbumProduceByArtist";
import { AlbumProduceByArtistGroupBy } from "../../outputs/AlbumProduceByArtistGroupBy";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class AlbumProduceByArtistCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAlbumProduceByArtist, {
    nullable: false
  })
  async aggregateAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAlbumProduceByArtistArgs): Promise<AggregateAlbumProduceByArtist> {
    return getPrismaFromContext(ctx).albumProduceByArtist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAlbumProduceByArtistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumProduceByArtist, {
    nullable: false
  })
  async createOneAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAlbumProduceByArtistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async deleteOneAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async findFirstAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async findFirstAlbumProduceByArtistOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAlbumProduceByArtistOrThrowArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AlbumProduceByArtist], {
    nullable: false
  })
  async albumProduceByArtists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async albumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async getAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAlbumProduceByArtistOrThrowArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AlbumProduceByArtistGroupBy], {
    nullable: false
  })
  async groupByAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAlbumProduceByArtistArgs): Promise<AlbumProduceByArtistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAlbumProduceByArtistArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async updateOneAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AlbumProduceByArtist, {
    nullable: false
  })
  async upsertOneAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
