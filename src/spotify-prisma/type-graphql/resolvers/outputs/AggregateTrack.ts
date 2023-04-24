import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackAvgAggregate } from "../outputs/TrackAvgAggregate";
import { TrackCountAggregate } from "../outputs/TrackCountAggregate";
import { TrackMaxAggregate } from "../outputs/TrackMaxAggregate";
import { TrackMinAggregate } from "../outputs/TrackMinAggregate";
import { TrackSumAggregate } from "../outputs/TrackSumAggregate";

@TypeGraphQL.ObjectType("AggregateTrack", {
  isAbstract: true
})
export class AggregateTrack {
  @TypeGraphQL.Field(_type => TrackCountAggregate, {
    nullable: true
  })
  _count!: TrackCountAggregate | null;

  @TypeGraphQL.Field(_type => TrackAvgAggregate, {
    nullable: true
  })
  _avg!: TrackAvgAggregate | null;

  @TypeGraphQL.Field(_type => TrackSumAggregate, {
    nullable: true
  })
  _sum!: TrackSumAggregate | null;

  @TypeGraphQL.Field(_type => TrackMinAggregate, {
    nullable: true
  })
  _min!: TrackMinAggregate | null;

  @TypeGraphQL.Field(_type => TrackMaxAggregate, {
    nullable: true
  })
  _max!: TrackMaxAggregate | null;
}
