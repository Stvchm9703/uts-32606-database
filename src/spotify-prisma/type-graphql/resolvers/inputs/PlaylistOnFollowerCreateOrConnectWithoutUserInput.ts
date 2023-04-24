import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateWithoutUserInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateWithoutUserInput, {
    nullable: false
  })
  create!: PlaylistOnFollowerCreateWithoutUserInput;
}
