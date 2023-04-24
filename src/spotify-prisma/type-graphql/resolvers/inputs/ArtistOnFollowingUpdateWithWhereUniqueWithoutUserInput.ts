import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingUpdateWithoutUserInput } from "../inputs/ArtistOnFollowingUpdateWithoutUserInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ArtistOnFollowingUpdateWithoutUserInput;
}
