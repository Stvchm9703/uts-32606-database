import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerUpdateWithoutUserInput } from "../inputs/PlaylistOnFollowerUpdateWithoutUserInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PlaylistOnFollowerUpdateWithoutUserInput;
}
