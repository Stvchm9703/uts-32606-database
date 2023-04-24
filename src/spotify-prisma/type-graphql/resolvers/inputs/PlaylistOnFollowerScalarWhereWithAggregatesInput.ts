import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PlaylistOnFollowerScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlaylistOnFollowerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlaylistOnFollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlaylistOnFollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlaylistOnFollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  playlistId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
