import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutOwnerInput } from "../inputs/PlaylistCreateWithoutOwnerInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutOwnerInput;
}
