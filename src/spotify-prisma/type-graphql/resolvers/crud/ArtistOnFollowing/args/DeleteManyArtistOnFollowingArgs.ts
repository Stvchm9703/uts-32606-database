import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingWhereInput } from "../../../inputs/ArtistOnFollowingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  where?: ArtistOnFollowingWhereInput | undefined;
}
