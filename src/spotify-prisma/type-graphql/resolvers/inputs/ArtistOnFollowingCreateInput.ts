import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutFollowersInput } from "../inputs/ArtistCreateNestedOneWithoutFollowersInput";
import { UserCreateNestedOneWithoutFollowingArtistsInput } from "../inputs/UserCreateNestedOneWithoutFollowingArtistsInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateInput {
  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutFollowersInput, {
    nullable: false
  })
  Artist!: ArtistCreateNestedOneWithoutFollowersInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingArtistsInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutFollowingArtistsInput;
}
