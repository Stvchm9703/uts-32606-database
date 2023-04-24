import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOrderByWithRelationInput } from "../inputs/ArtistOrderByWithRelationInput";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArtistInGenresOrderByWithRelationInput", {
  isAbstract: true
})
export class ArtistInGenresOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArtistOrderByWithRelationInput, {
    nullable: true
  })
  Artist?: ArtistOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  Tag?: TagOrderByWithRelationInput | undefined;
}
