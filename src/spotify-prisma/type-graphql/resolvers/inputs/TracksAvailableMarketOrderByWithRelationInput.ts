import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { TrackOrderByWithRelationInput } from "../inputs/TrackOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TracksAvailableMarketOrderByWithRelationInput", {
  isAbstract: true
})
export class TracksAvailableMarketOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  Tag?: TagOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TrackOrderByWithRelationInput, {
    nullable: true
  })
  Track?: TrackOrderByWithRelationInput | undefined;
}
