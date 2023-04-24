import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTrackArgs } from "./args/AggregateTrackArgs";
import { Track } from "../../../models/Track";
import { AggregateTrack } from "../../outputs/AggregateTrack";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Track)
export class AggregateTrackResolver {
  @TypeGraphQL.Query(_returns => AggregateTrack, {
    nullable: false
  })
  async aggregateTrack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrackArgs): Promise<AggregateTrack> {
    return getPrismaFromContext(ctx).track.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
