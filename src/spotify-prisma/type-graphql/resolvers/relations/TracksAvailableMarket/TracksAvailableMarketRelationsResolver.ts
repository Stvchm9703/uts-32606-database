import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Tag } from "../../../models/Tag";
import { Track } from "../../../models/Track";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class TracksAvailableMarketRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async Tag(@TypeGraphQL.Root() tracksAvailableMarket: TracksAvailableMarket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findUniqueOrThrow({
      where: {
        trackId_tagId: {
          trackId: tracksAvailableMarket.trackId,
          tagId: tracksAvailableMarket.tagId,
        },
      },
    }).Tag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Track, {
    nullable: false
  })
  async Track(@TypeGraphQL.Root() tracksAvailableMarket: TracksAvailableMarket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Track> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findUniqueOrThrow({
      where: {
        trackId_tagId: {
          trackId: tracksAvailableMarket.trackId,
          tagId: tracksAvailableMarket.tagId,
        },
      },
    }).Track({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
