import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateWithoutArtistsInput } from "../inputs/AlbumCreateWithoutArtistsInput";
import { AlbumUpdateWithoutArtistsInput } from "../inputs/AlbumUpdateWithoutArtistsInput";

@TypeGraphQL.InputType("AlbumUpsertWithoutArtistsInput", {
  isAbstract: true
})
export class AlbumUpsertWithoutArtistsInput {
  @TypeGraphQL.Field(_type => AlbumUpdateWithoutArtistsInput, {
    nullable: false
  })
  update!: AlbumUpdateWithoutArtistsInput;

  @TypeGraphQL.Field(_type => AlbumCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: AlbumCreateWithoutArtistsInput;
}
