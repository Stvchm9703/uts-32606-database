import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingCreateInput } from "../../../inputs/ArtistOnFollowingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateInput, {
    nullable: false
  })
  data!: ArtistOnFollowingCreateInput;
}
