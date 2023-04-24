import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateWithoutTrackInput } from "../inputs/TracksOnPlaylistCreateWithoutTrackInput";
import { TracksOnPlaylistUpdateWithoutTrackInput } from "../inputs/TracksOnPlaylistUpdateWithoutTrackInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateWithoutTrackInput, {
    nullable: false
  })
  update!: TracksOnPlaylistUpdateWithoutTrackInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateWithoutTrackInput, {
    nullable: false
  })
  create!: TracksOnPlaylistCreateWithoutTrackInput;
}
