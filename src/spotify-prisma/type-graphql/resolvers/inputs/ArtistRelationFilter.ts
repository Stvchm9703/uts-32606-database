import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistWhereInput } from "../inputs/ArtistWhereInput";

@TypeGraphQL.InputType("ArtistRelationFilter", {
  isAbstract: true
})
export class ArtistRelationFilter {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  is?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  isNot?: ArtistWhereInput | undefined;
}
