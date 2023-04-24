import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateWithoutOwnerInput } from "../inputs/PlaylistUpdateWithoutOwnerInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class PlaylistUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: PlaylistUpdateWithoutOwnerInput;
}
