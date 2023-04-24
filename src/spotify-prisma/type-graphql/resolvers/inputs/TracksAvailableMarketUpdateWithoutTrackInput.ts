import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput } from "../inputs/TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateWithoutTrackInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateWithoutTrackInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput | undefined;
}
