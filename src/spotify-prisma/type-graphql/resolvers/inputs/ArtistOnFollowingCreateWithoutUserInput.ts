import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutFollowersInput } from "../inputs/ArtistCreateNestedOneWithoutFollowersInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutFollowersInput, {
    nullable: false
  })
  Artist!: ArtistCreateNestedOneWithoutFollowersInput;
}
