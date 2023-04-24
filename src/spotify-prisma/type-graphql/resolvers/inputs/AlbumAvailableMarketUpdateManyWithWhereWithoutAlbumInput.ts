import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketScalarWhereInput } from "../inputs/AlbumAvailableMarketScalarWhereInput";
import { AlbumAvailableMarketUpdateManyMutationInput } from "../inputs/AlbumAvailableMarketUpdateManyMutationInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketScalarWhereInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketScalarWhereInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlbumAvailableMarketUpdateManyMutationInput;
}
