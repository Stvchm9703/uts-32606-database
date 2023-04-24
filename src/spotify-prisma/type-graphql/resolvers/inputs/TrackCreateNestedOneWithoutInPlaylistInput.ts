import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateOrConnectWithoutInPlaylistInput } from "../inputs/TrackCreateOrConnectWithoutInPlaylistInput";
import { TrackCreateWithoutInPlaylistInput } from "../inputs/TrackCreateWithoutInPlaylistInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackCreateNestedOneWithoutInPlaylistInput", {
  isAbstract: true
})
export class TrackCreateNestedOneWithoutInPlaylistInput {
  @TypeGraphQL.Field(_type => TrackCreateWithoutInPlaylistInput, {
    nullable: true
  })
  create?: TrackCreateWithoutInPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => TrackCreateOrConnectWithoutInPlaylistInput, {
    nullable: true
  })
  connectOrCreate?: TrackCreateOrConnectWithoutInPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: true
  })
  connect?: TrackWhereUniqueInput | undefined;
}
