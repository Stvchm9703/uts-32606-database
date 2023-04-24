import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumOrderByWithRelationInput } from "../../../inputs/AlbumOrderByWithRelationInput";
import { AlbumWhereInput } from "../../../inputs/AlbumWhereInput";
import { AlbumWhereUniqueInput } from "../../../inputs/AlbumWhereUniqueInput";
import { AlbumScalarFieldEnum } from "../../../../enums/AlbumScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumWhereInput, {
    nullable: true
  })
  where?: AlbumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlbumOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AlbumOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  cursor?: AlbumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AlbumScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "uid" | "albumType" | "totalTracks" | "name" | "releaseDate" | "releaseDatePrecision" | "albumGroup" | "copyrights" | "imageUrl"> | undefined;
}
