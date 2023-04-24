import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateWithoutPlaylistInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateOrConnectWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateOrConnectWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: TracksOnPlaylistCreateWithoutPlaylistInput;
}
