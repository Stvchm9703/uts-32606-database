import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAlbumProduceByArtistArgs } from "./args/DeleteOneAlbumProduceByArtistArgs";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class DeleteOneAlbumProduceByArtistResolver {
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
}
