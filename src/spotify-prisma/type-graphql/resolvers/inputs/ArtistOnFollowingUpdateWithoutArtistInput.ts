import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowingArtistsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingArtistsNestedInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateWithoutArtistInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateWithoutArtistInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingArtistsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutFollowingArtistsNestedInput | undefined;
}
