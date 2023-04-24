import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateWithoutTagInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateWithoutTagInput, {
    nullable: false
  })
  create!: AlbumAvailableMarketCreateWithoutTagInput;
}
