import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresArtistIdTagIdCompoundUniqueInput } from "../inputs/ArtistInGenresArtistIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresWhereUniqueInput", {
  isAbstract: true
})
export class ArtistInGenresWhereUniqueInput {
  @TypeGraphQL.Field(_type => ArtistInGenresArtistIdTagIdCompoundUniqueInput, {
    nullable: true
  })
  artistId_tagId?: ArtistInGenresArtistIdTagIdCompoundUniqueInput | undefined;
}
