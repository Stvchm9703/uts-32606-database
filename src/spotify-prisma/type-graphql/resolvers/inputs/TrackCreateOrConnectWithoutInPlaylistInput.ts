import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutInPlaylistInput } from "../inputs/TrackCreateWithoutInPlaylistInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackCreateOrConnectWithoutInPlaylistInput", {
  isAbstract: true
})
export class TrackCreateOrConnectWithoutInPlaylistInput {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutInPlaylistInput, {
    nullable: false
  })
  create!: TrackCreateWithoutInPlaylistInput;
}
