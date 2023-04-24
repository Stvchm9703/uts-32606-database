import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateManyPlaylistInputEnvelope } from "../inputs/TracksOnPlaylistCreateManyPlaylistInputEnvelope";
import { TracksOnPlaylistCreateOrConnectWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateOrConnectWithoutPlaylistInput";
import { TracksOnPlaylistCreateWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateWithoutPlaylistInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateNestedManyWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateNestedManyWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateWithoutPlaylistInput], {
    nullable: true
  })
  create?: TracksOnPlaylistCreateWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateOrConnectWithoutPlaylistInput], {
    nullable: true
  })
  connectOrCreate?: TracksOnPlaylistCreateOrConnectWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateManyPlaylistInputEnvelope, {
    nullable: true
  })
  createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: TracksOnPlaylistWhereUniqueInput[] | undefined;
}
