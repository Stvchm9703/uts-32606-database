import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateWithoutAvailableMarketsInput } from "../inputs/AlbumCreateWithoutAvailableMarketsInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumCreateOrConnectWithoutAvailableMarketsInput", {
  isAbstract: true
})
export class AlbumCreateOrConnectWithoutAvailableMarketsInput {
  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumCreateWithoutAvailableMarketsInput, {
    nullable: false
  })
  create!: AlbumCreateWithoutAvailableMarketsInput;
}
