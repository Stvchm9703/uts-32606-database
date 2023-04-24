import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateWithoutUserInput } from "../inputs/ArtistOnFollowingCreateWithoutUserInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateWithoutUserInput, {
    nullable: false
  })
  create!: ArtistOnFollowingCreateWithoutUserInput;
}
