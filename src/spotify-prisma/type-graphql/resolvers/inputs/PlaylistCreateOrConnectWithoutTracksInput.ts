import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutTracksInput } from "../inputs/PlaylistCreateWithoutTracksInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutTracksInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutTracksInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutTracksInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutTracksInput;
}
