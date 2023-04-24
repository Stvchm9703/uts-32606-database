import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresWhereInput } from "../inputs/ArtistInGenresWhereInput";

@TypeGraphQL.InputType("ArtistInGenresListRelationFilter", {
  isAbstract: true
})
export class ArtistInGenresListRelationFilter {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  every?: ArtistInGenresWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  some?: ArtistInGenresWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  none?: ArtistInGenresWhereInput | undefined;
}
