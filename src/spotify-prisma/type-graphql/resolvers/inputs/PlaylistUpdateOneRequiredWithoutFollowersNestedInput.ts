import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateOrConnectWithoutFollowersInput } from "../inputs/PlaylistCreateOrConnectWithoutFollowersInput";
import { PlaylistCreateWithoutFollowersInput } from "../inputs/PlaylistCreateWithoutFollowersInput";
import { PlaylistUpdateWithoutFollowersInput } from "../inputs/PlaylistUpdateWithoutFollowersInput";
import { PlaylistUpsertWithoutFollowersInput } from "../inputs/PlaylistUpsertWithoutFollowersInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateOneRequiredWithoutFollowersNestedInput", {
  isAbstract: true
})
export class PlaylistUpdateOneRequiredWithoutFollowersNestedInput {
  @TypeGraphQL.Field(_type => PlaylistCreateWithoutFollowersInput, {
    nullable: true
  })
  create?: PlaylistCreateWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateOrConnectWithoutFollowersInput, {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpsertWithoutFollowersInput, {
    nullable: true
  })
  upsert?: PlaylistUpsertWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutFollowersInput, {
    nullable: true
  })
  update?: PlaylistUpdateWithoutFollowersInput | undefined;
}
