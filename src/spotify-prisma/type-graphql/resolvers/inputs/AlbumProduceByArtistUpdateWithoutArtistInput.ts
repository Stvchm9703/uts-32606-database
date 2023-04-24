import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumUpdateOneRequiredWithoutArtistsNestedInput } from "../inputs/AlbumUpdateOneRequiredWithoutArtistsNestedInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateWithoutArtistInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateWithoutArtistInput {
  @TypeGraphQL.Field(_type => AlbumUpdateOneRequiredWithoutArtistsNestedInput, {
    nullable: true
  })
  Album?: AlbumUpdateOneRequiredWithoutArtistsNestedInput | undefined;
}
