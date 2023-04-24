import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutGenresInput } from "../inputs/ArtistCreateWithoutGenresInput";
import { ArtistUpdateWithoutGenresInput } from "../inputs/ArtistUpdateWithoutGenresInput";

@TypeGraphQL.InputType("ArtistUpsertWithoutGenresInput", {
  isAbstract: true
})
export class ArtistUpsertWithoutGenresInput {
  @TypeGraphQL.Field(_type => ArtistUpdateWithoutGenresInput, {
    nullable: false
  })
  update!: ArtistUpdateWithoutGenresInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutGenresInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutGenresInput;
}
