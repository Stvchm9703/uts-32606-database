import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingUpdateInput } from "../../../inputs/ArtistOnFollowingUpdateInput";
import { ArtistOnFollowingWhereUniqueInput } from "../../../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateInput, {
    nullable: false
  })
  data!: ArtistOnFollowingUpdateInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;
}
