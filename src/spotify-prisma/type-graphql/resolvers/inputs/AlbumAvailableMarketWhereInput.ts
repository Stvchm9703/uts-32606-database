import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumRelationFilter } from "../inputs/AlbumRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("AlbumAvailableMarketWhereInput", {
  isAbstract: true
})
export class AlbumAvailableMarketWhereInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereInput], {
    nullable: true
  })
  AND?: AlbumAvailableMarketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereInput], {
    nullable: true
  })
  OR?: AlbumAvailableMarketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereInput], {
    nullable: true
  })
  NOT?: AlbumAvailableMarketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  albumId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumRelationFilter, {
    nullable: true
  })
  Album?: AlbumRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  Tag?: TagRelationFilter | undefined;
}
