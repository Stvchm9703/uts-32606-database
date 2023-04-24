import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateOrConnectWithoutAlbumAvailableMarketInput";
import { TagCreateWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateWithoutAlbumAvailableMarketInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutAlbumAvailableMarketInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutAlbumAvailableMarketInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutAlbumAvailableMarketInput, {
    nullable: true
  })
  create?: TagCreateWithoutAlbumAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutAlbumAvailableMarketInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutAlbumAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
