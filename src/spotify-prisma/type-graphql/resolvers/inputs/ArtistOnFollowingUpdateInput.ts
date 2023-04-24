import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutFollowersNestedInput";
import { UserUpdateOneRequiredWithoutFollowingArtistsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingArtistsNestedInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateInput {
  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutFollowersNestedInput, {
    nullable: true
  })
  Artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingArtistsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutFollowingArtistsNestedInput | undefined;
}
