import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TrackProduceByArtistScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TrackProduceByArtistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TrackProduceByArtistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TrackProduceByArtistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TrackProduceByArtistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  trackId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  artistId?: IntWithAggregatesFilter | undefined;
}
