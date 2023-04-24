import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateWithoutAlbumAvailableMarketInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutAlbumAvailableMarketInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutAlbumAvailableMarketInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutAlbumAvailableMarketInput, {
    nullable: false
  })
  create!: TagCreateWithoutAlbumAvailableMarketInput;
}
