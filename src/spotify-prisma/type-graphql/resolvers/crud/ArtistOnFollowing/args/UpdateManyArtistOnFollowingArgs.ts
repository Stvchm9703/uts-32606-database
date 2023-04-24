import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingUpdateManyMutationInput } from "../../../inputs/ArtistOnFollowingUpdateManyMutationInput";
import { ArtistOnFollowingWhereInput } from "../../../inputs/ArtistOnFollowingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistOnFollowingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  where?: ArtistOnFollowingWhereInput | undefined;
}
