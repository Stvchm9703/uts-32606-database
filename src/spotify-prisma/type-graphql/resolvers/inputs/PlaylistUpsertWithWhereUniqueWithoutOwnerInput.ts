import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutOwnerInput } from "../inputs/PlaylistCreateWithoutOwnerInput";
import { PlaylistUpdateWithoutOwnerInput } from "../inputs/PlaylistUpdateWithoutOwnerInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class PlaylistUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutOwnerInput;
}
