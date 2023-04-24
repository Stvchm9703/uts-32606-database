import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistUpdateWithoutPlaylistInput } from "../inputs/TracksOnPlaylistUpdateWithoutPlaylistInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateWithoutPlaylistInput, {
    nullable: false
  })
  data!: TracksOnPlaylistUpdateWithoutPlaylistInput;
}
