import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ArtistInGenresScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ArtistInGenresScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ArtistInGenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ArtistInGenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ArtistInGenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  artistId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tagId?: IntWithAggregatesFilter | undefined;
}
