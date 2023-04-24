import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateOrConnectWithoutTracksInput } from "../inputs/PlaylistCreateOrConnectWithoutTracksInput";
import { PlaylistCreateWithoutTracksInput } from "../inputs/PlaylistCreateWithoutTracksInput";
import { PlaylistUpdateWithoutTracksInput } from "../inputs/PlaylistUpdateWithoutTracksInput";
import { PlaylistUpsertWithoutTracksInput } from "../inputs/PlaylistUpsertWithoutTracksInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateOneRequiredWithoutTracksNestedInput", {
  isAbstract: true
})
export class PlaylistUpdateOneRequiredWithoutTracksNestedInput {
  @TypeGraphQL.Field(_type => PlaylistCreateWithoutTracksInput, {
    nullable: true
  })
  create?: PlaylistCreateWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateOrConnectWithoutTracksInput, {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpsertWithoutTracksInput, {
    nullable: true
  })
  upsert?: PlaylistUpsertWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutTracksInput, {
    nullable: true
  })
  update?: PlaylistUpdateWithoutTracksInput | undefined;
}
