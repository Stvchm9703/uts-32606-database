import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateOrConnectWithoutInPlaylistInput } from "../inputs/TrackCreateOrConnectWithoutInPlaylistInput";
import { TrackCreateWithoutInPlaylistInput } from "../inputs/TrackCreateWithoutInPlaylistInput";
import { TrackUpdateWithoutInPlaylistInput } from "../inputs/TrackUpdateWithoutInPlaylistInput";
import { TrackUpsertWithoutInPlaylistInput } from "../inputs/TrackUpsertWithoutInPlaylistInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackUpdateOneRequiredWithoutInPlaylistNestedInput", {
  isAbstract: true
})
export class TrackUpdateOneRequiredWithoutInPlaylistNestedInput {
  @TypeGraphQL.Field(_type => TrackCreateWithoutInPlaylistInput, {
    nullable: true
  })
  create?: TrackCreateWithoutInPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => TrackCreateOrConnectWithoutInPlaylistInput, {
    nullable: true
  })
  connectOrCreate?: TrackCreateOrConnectWithoutInPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpsertWithoutInPlaylistInput, {
    nullable: true
  })
  upsert?: TrackUpsertWithoutInPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: true
  })
  connect?: TrackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpdateWithoutInPlaylistInput, {
    nullable: true
  })
  update?: TrackUpdateWithoutInPlaylistInput | undefined;
}
