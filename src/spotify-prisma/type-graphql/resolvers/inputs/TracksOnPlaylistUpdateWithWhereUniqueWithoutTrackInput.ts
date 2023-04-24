import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistUpdateWithoutTrackInput } from "../inputs/TracksOnPlaylistUpdateWithoutTrackInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateWithoutTrackInput, {
    nullable: false
  })
  data!: TracksOnPlaylistUpdateWithoutTrackInput;
}
