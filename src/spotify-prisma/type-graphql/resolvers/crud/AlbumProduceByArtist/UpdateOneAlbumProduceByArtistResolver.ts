import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAlbumProduceByArtistArgs } from "./args/UpdateOneAlbumProduceByArtistArgs";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class UpdateOneAlbumProduceByArtistResolver {
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
}
