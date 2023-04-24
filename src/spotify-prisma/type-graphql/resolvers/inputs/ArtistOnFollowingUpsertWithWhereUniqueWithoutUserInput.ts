import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateWithoutUserInput } from "../inputs/ArtistOnFollowingCreateWithoutUserInput";
import { ArtistOnFollowingUpdateWithoutUserInput } from "../inputs/ArtistOnFollowingUpdateWithoutUserInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ArtistOnFollowingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateWithoutUserInput, {
    nullable: false
  })
  create!: ArtistOnFollowingCreateWithoutUserInput;
}
