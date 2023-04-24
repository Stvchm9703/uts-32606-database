import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateWithoutPlaylistInput";
import { TracksOnPlaylistUpdateWithoutPlaylistInput } from "../inputs/TracksOnPlaylistUpdateWithoutPlaylistInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateWithoutPlaylistInput, {
    nullable: false
  })
  update!: TracksOnPlaylistUpdateWithoutPlaylistInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: TracksOnPlaylistCreateWithoutPlaylistInput;
}
