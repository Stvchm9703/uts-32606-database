import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowingArtistsInput } from "../inputs/UserCreateNestedOneWithoutFollowingArtistsInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateWithoutArtistInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateWithoutArtistInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingArtistsInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutFollowingArtistsInput;
}
