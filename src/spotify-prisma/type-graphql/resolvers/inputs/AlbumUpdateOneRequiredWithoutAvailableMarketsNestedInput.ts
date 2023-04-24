import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateOrConnectWithoutAvailableMarketsInput } from "../inputs/AlbumCreateOrConnectWithoutAvailableMarketsInput";
import { AlbumCreateWithoutAvailableMarketsInput } from "../inputs/AlbumCreateWithoutAvailableMarketsInput";
import { AlbumUpdateWithoutAvailableMarketsInput } from "../inputs/AlbumUpdateWithoutAvailableMarketsInput";
import { AlbumUpsertWithoutAvailableMarketsInput } from "../inputs/AlbumUpsertWithoutAvailableMarketsInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput", {
  isAbstract: true
})
export class AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput {
  @TypeGraphQL.Field(_type => AlbumCreateWithoutAvailableMarketsInput, {
    nullable: true
  })
  create?: AlbumCreateWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumCreateOrConnectWithoutAvailableMarketsInput, {
    nullable: true
  })
  connectOrCreate?: AlbumCreateOrConnectWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumUpsertWithoutAvailableMarketsInput, {
    nullable: true
  })
  upsert?: AlbumUpsertWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  connect?: AlbumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AlbumUpdateWithoutAvailableMarketsInput, {
    nullable: true
  })
  update?: AlbumUpdateWithoutAvailableMarketsInput | undefined;
}
