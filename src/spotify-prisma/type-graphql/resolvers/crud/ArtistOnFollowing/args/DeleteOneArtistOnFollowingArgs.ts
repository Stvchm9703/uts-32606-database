import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingWhereUniqueInput } from "../../../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;
}
