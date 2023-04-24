import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateNestedOneWithoutInPlaylistInput } from "../inputs/TrackCreateNestedOneWithoutInPlaylistInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => TrackCreateNestedOneWithoutInPlaylistInput, {
    nullable: false
  })
  Track!: TrackCreateNestedOneWithoutInPlaylistInput;
}
