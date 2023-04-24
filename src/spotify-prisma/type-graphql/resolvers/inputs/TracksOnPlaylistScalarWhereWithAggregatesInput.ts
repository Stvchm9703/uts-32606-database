import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TracksOnPlaylistScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TracksOnPlaylistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TracksOnPlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TracksOnPlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TracksOnPlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  playlistId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  trackId?: IntWithAggregatesFilter | undefined;
}
