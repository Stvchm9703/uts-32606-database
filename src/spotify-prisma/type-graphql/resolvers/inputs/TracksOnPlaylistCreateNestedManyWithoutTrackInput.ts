import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateManyTrackInputEnvelope } from "../inputs/TracksOnPlaylistCreateManyTrackInputEnvelope";
import { TracksOnPlaylistCreateOrConnectWithoutTrackInput } from "../inputs/TracksOnPlaylistCreateOrConnectWithoutTrackInput";
import { TracksOnPlaylistCreateWithoutTrackInput } from "../inputs/TracksOnPlaylistCreateWithoutTrackInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateNestedManyWithoutTrackInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateNestedManyWithoutTrackInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateWithoutTrackInput], {
    nullable: true
  })
  create?: TracksOnPlaylistCreateWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateOrConnectWithoutTrackInput], {
    nullable: true
  })
  connectOrCreate?: TracksOnPlaylistCreateOrConnectWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateManyTrackInputEnvelope, {
    nullable: true
  })
  createMany?: TracksOnPlaylistCreateManyTrackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: TracksOnPlaylistWhereUniqueInput[] | undefined;
}
