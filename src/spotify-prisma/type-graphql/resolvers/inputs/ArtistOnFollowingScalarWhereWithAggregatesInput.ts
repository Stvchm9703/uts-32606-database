import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ArtistOnFollowingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ArtistOnFollowingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ArtistOnFollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ArtistOnFollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ArtistOnFollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  artistId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
