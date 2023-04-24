import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingAvgAggregate } from "../outputs/ArtistOnFollowingAvgAggregate";
import { ArtistOnFollowingCountAggregate } from "../outputs/ArtistOnFollowingCountAggregate";
import { ArtistOnFollowingMaxAggregate } from "../outputs/ArtistOnFollowingMaxAggregate";
import { ArtistOnFollowingMinAggregate } from "../outputs/ArtistOnFollowingMinAggregate";
import { ArtistOnFollowingSumAggregate } from "../outputs/ArtistOnFollowingSumAggregate";

@TypeGraphQL.ObjectType("AggregateArtistOnFollowing", {
  isAbstract: true
})
export class AggregateArtistOnFollowing {
  @TypeGraphQL.Field(_type => ArtistOnFollowingCountAggregate, {
    nullable: true
  })
  _count!: ArtistOnFollowingCountAggregate | null;

  @TypeGraphQL.Field(_type => ArtistOnFollowingAvgAggregate, {
    nullable: true
  })
  _avg!: ArtistOnFollowingAvgAggregate | null;

  @TypeGraphQL.Field(_type => ArtistOnFollowingSumAggregate, {
    nullable: true
  })
  _sum!: ArtistOnFollowingSumAggregate | null;

  @TypeGraphQL.Field(_type => ArtistOnFollowingMinAggregate, {
    nullable: true
  })
  _min!: ArtistOnFollowingMinAggregate | null;

  @TypeGraphQL.Field(_type => ArtistOnFollowingMaxAggregate, {
    nullable: true
  })
  _max!: ArtistOnFollowingMaxAggregate | null;
}
