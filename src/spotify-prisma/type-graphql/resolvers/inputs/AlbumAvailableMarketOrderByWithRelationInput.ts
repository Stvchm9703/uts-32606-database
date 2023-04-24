import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumOrderByWithRelationInput } from "../inputs/AlbumOrderByWithRelationInput";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlbumAvailableMarketOrderByWithRelationInput", {
  isAbstract: true
})
export class AlbumAvailableMarketOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albumId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlbumOrderByWithRelationInput, {
    nullable: true
  })
  Album?: AlbumOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  Tag?: TagOrderByWithRelationInput | undefined;
}
