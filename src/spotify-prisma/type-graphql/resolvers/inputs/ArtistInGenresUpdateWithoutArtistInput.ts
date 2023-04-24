import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutArtistInGenresNestedInput } from "../inputs/TagUpdateOneRequiredWithoutArtistInGenresNestedInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateWithoutArtistInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateWithoutArtistInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutArtistInGenresNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutArtistInGenresNestedInput | undefined;
}
