import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateWithoutAvailableMarketsInput } from "../inputs/AlbumCreateWithoutAvailableMarketsInput";
import { AlbumUpdateWithoutAvailableMarketsInput } from "../inputs/AlbumUpdateWithoutAvailableMarketsInput";

@TypeGraphQL.InputType("AlbumUpsertWithoutAvailableMarketsInput", {
  isAbstract: true
})
export class AlbumUpsertWithoutAvailableMarketsInput {
  @TypeGraphQL.Field(_type => AlbumUpdateWithoutAvailableMarketsInput, {
    nullable: false
  })
  update!: AlbumUpdateWithoutAvailableMarketsInput;

  @TypeGraphQL.Field(_type => AlbumCreateWithoutAvailableMarketsInput, {
    nullable: false
  })
  create!: AlbumCreateWithoutAvailableMarketsInput;
}
