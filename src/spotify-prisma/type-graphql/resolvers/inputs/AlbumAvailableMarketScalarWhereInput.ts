import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("AlbumAvailableMarketScalarWhereInput", {
  isAbstract: true
})
export class AlbumAvailableMarketScalarWhereInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereInput], {
    nullable: true
  })
  AND?: AlbumAvailableMarketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereInput], {
    nullable: true
  })
  OR?: AlbumAvailableMarketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereInput], {
    nullable: true
  })
  NOT?: AlbumAvailableMarketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  albumId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;
}
