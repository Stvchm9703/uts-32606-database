import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateManyTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateManyTagInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  albumId!: number;
}
