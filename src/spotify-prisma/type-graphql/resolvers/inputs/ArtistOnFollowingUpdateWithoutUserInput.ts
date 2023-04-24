import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutFollowersNestedInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutFollowersNestedInput, {
    nullable: true
  })
  Artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput | undefined;
}
