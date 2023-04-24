import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistAvgAggregate } from "../outputs/TrackProduceByArtistAvgAggregate";
import { TrackProduceByArtistCountAggregate } from "../outputs/TrackProduceByArtistCountAggregate";
import { TrackProduceByArtistMaxAggregate } from "../outputs/TrackProduceByArtistMaxAggregate";
import { TrackProduceByArtistMinAggregate } from "../outputs/TrackProduceByArtistMinAggregate";
import { TrackProduceByArtistSumAggregate } from "../outputs/TrackProduceByArtistSumAggregate";

@TypeGraphQL.ObjectType("TrackProduceByArtistGroupBy", {
  isAbstract: true
})
export class TrackProduceByArtistGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCountAggregate, {
    nullable: true
  })
  _count!: TrackProduceByArtistCountAggregate | null;

  @TypeGraphQL.Field(_type => TrackProduceByArtistAvgAggregate, {
    nullable: true
  })
  _avg!: TrackProduceByArtistAvgAggregate | null;

  @TypeGraphQL.Field(_type => TrackProduceByArtistSumAggregate, {
    nullable: true
  })
  _sum!: TrackProduceByArtistSumAggregate | null;

  @TypeGraphQL.Field(_type => TrackProduceByArtistMinAggregate, {
    nullable: true
  })
  _min!: TrackProduceByArtistMinAggregate | null;

  @TypeGraphQL.Field(_type => TrackProduceByArtistMaxAggregate, {
    nullable: true
  })
  _max!: TrackProduceByArtistMaxAggregate | null;
}
