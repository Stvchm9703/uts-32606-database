import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketOrderByWithAggregationInput } from "../../../inputs/TracksAvailableMarketOrderByWithAggregationInput";
import { TracksAvailableMarketScalarWhereWithAggregatesInput } from "../../../inputs/TracksAvailableMarketScalarWhereWithAggregatesInput";
import { TracksAvailableMarketWhereInput } from "../../../inputs/TracksAvailableMarketWhereInput";
import { TracksAvailableMarketScalarFieldEnum } from "../../../../enums/TracksAvailableMarketScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  where?: TracksAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TracksAvailableMarketOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tagId" | "trackId">;

  @TypeGraphQL.Field(_type => TracksAvailableMarketScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TracksAvailableMarketScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
