import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateOrConnectWithoutAvailableMarketsInput } from "../inputs/AlbumCreateOrConnectWithoutAvailableMarketsInput";
import { AlbumCreateWithoutAvailableMarketsInput } from "../inputs/AlbumCreateWithoutAvailableMarketsInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumCreateNestedOneWithoutAvailableMarketsInput", {
  isAbstract: true
})
export class AlbumCreateNestedOneWithoutAvailableMarketsInput {
  @TypeGraphQL.Field(_type => AlbumCreateWithoutAvailableMarketsInput, {
    nullable: true
  })
  create?: AlbumCreateWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumCreateOrConnectWithoutAvailableMarketsInput, {
    nullable: true
  })
  connectOrCreate?: AlbumCreateOrConnectWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  connect?: AlbumWhereUniqueInput | undefined;
}
