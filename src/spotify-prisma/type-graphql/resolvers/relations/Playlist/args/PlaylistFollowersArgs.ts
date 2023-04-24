import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerOrderByWithRelationInput } from "../../../inputs/PlaylistOnFollowerOrderByWithRelationInput";
import { PlaylistOnFollowerWhereInput } from "../../../inputs/PlaylistOnFollowerWhereInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../../../inputs/PlaylistOnFollowerWhereUniqueInput";
import { PlaylistOnFollowerScalarFieldEnum } from "../../../../enums/PlaylistOnFollowerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PlaylistFollowersArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  where?: PlaylistOnFollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlaylistOnFollowerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlaylistOnFollowerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"playlistId" | "userId"> | undefined;
}
