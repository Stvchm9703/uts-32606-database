import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAlbumArgs } from "./args/AggregateAlbumArgs";
import { Album } from "../../../models/Album";
import { AggregateAlbum } from "../../outputs/AggregateAlbum";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Album)
export class AggregateAlbumResolver {
  @TypeGraphQL.Query(_returns => AggregateAlbum, {
    nullable: false
  })
  async aggregateAlbum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAlbumArgs): Promise<AggregateAlbum> {
    return getPrismaFromContext(ctx).album.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
