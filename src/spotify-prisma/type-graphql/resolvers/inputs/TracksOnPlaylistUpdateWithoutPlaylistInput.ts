import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackUpdateOneRequiredWithoutInPlaylistNestedInput } from "../inputs/TrackUpdateOneRequiredWithoutInPlaylistNestedInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => TrackUpdateOneRequiredWithoutInPlaylistNestedInput, {
    nullable: true
  })
  Track?: TrackUpdateOneRequiredWithoutInPlaylistNestedInput | undefined;
}
