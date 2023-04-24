import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateNestedOneWithoutArtistsInput } from "../inputs/AlbumCreateNestedOneWithoutArtistsInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateWithoutArtistInput", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateWithoutArtistInput {
  @TypeGraphQL.Field(_type => AlbumCreateNestedOneWithoutArtistsInput, {
    nullable: false
  })
  Album!: AlbumCreateNestedOneWithoutArtistsInput;
}
