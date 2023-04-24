import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutGenresNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutGenresNestedInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutGenresNestedInput, {
    nullable: true
  })
  Artist?: ArtistUpdateOneRequiredWithoutGenresNestedInput | undefined;
}
