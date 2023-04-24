import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateOrConnectWithoutAlbumAvailableMarketInput";
import { TagCreateWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateWithoutAlbumAvailableMarketInput";
import { TagUpdateWithoutAlbumAvailableMarketInput } from "../inputs/TagUpdateWithoutAlbumAvailableMarketInput";
import { TagUpsertWithoutAlbumAvailableMarketInput } from "../inputs/TagUpsertWithoutAlbumAvailableMarketInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput", {
  isAbstract: true
})
export class TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutAlbumAvailableMarketInput, {
    nullable: true
  })
  create?: TagCreateWithoutAlbumAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutAlbumAvailableMarketInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutAlbumAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutAlbumAvailableMarketInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutAlbumAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutAlbumAvailableMarketInput, {
    nullable: true
  })
  update?: TagUpdateWithoutAlbumAvailableMarketInput | undefined;
}
