import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingCreateInput } from "../../../inputs/ArtistOnFollowingCreateInput";
import { ArtistOnFollowingUpdateInput } from "../../../inputs/ArtistOnFollowingUpdateInput";
import { ArtistOnFollowingWhereUniqueInput } from "../../../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateInput, {
    nullable: false
  })
  create!: ArtistOnFollowingCreateInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateInput, {
    nullable: false
  })
  update!: ArtistOnFollowingUpdateInput;
}
