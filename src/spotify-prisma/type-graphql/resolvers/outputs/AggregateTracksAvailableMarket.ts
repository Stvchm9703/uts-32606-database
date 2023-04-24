import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketAvgAggregate } from "../outputs/TracksAvailableMarketAvgAggregate";
import { TracksAvailableMarketCountAggregate } from "../outputs/TracksAvailableMarketCountAggregate";
import { TracksAvailableMarketMaxAggregate } from "../outputs/TracksAvailableMarketMaxAggregate";
import { TracksAvailableMarketMinAggregate } from "../outputs/TracksAvailableMarketMinAggregate";
import { TracksAvailableMarketSumAggregate } from "../outputs/TracksAvailableMarketSumAggregate";

@TypeGraphQL.ObjectType("AggregateTracksAvailableMarket", {
  isAbstract: true
})
export class AggregateTracksAvailableMarket {
  @TypeGraphQL.Field(_type => TracksAvailableMarketCountAggregate, {
    nullable: true
  })
  _count!: TracksAvailableMarketCountAggregate | null;

  @TypeGraphQL.Field(_type => TracksAvailableMarketAvgAggregate, {
    nullable: true
  })
  _avg!: TracksAvailableMarketAvgAggregate | null;

  @TypeGraphQL.Field(_type => TracksAvailableMarketSumAggregate, {
    nullable: true
  })
  _sum!: TracksAvailableMarketSumAggregate | null;

  @TypeGraphQL.Field(_type => TracksAvailableMarketMinAggregate, {
    nullable: true
  })
  _min!: TracksAvailableMarketMinAggregate | null;

  @TypeGraphQL.Field(_type => TracksAvailableMarketMaxAggregate, {
    nullable: true
  })
  _max!: TracksAvailableMarketMaxAggregate | null;
}
