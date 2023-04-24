import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumWhereInput } from "../inputs/AlbumWhereInput";

@TypeGraphQL.InputType("AlbumRelationFilter", {
  isAbstract: true
})
export class AlbumRelationFilter {
  @TypeGraphQL.Field(_type => AlbumWhereInput, {
    nullable: true
  })
  is?: AlbumWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereInput, {
    nullable: true
  })
  isNot?: AlbumWhereInput | undefined;
}
