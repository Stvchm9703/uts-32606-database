import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackAvgAggregate } from "../outputs/TrackAvgAggregate";
import { TrackCountAggregate } from "../outputs/TrackCountAggregate";
import { TrackMaxAggregate } from "../outputs/TrackMaxAggregate";
import { TrackMinAggregate } from "../outputs/TrackMinAggregate";
import { TrackSumAggregate } from "../outputs/TrackSumAggregate";

@TypeGraphQL.ObjectType("TrackGroupBy", {
  isAbstract: true
})
export class TrackGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  durationMs!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicit!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularity!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previewUrl!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackNumber!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isLocal!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  albumId!: number | null;

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
