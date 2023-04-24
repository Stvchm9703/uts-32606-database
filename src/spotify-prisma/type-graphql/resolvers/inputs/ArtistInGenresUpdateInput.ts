import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutGenresNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutGenresNestedInput";
import { TagUpdateOneRequiredWithoutArtistInGenresNestedInput } from "../inputs/TagUpdateOneRequiredWithoutArtistInGenresNestedInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateInput {
  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutGenresNestedInput, {
    nullable: true
  })
  Artist?: ArtistUpdateOneRequiredWithoutGenresNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutArtistInGenresNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutArtistInGenresNestedInput | undefined;
}
