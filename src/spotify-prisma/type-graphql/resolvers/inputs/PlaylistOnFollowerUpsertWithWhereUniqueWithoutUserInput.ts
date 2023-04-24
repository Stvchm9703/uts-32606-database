import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateWithoutUserInput";
import { PlaylistOnFollowerUpdateWithoutUserInput } from "../inputs/PlaylistOnFollowerUpdateWithoutUserInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PlaylistOnFollowerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateWithoutUserInput, {
    nullable: false
  })
  create!: PlaylistOnFollowerCreateWithoutUserInput;
}
