import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistAvgAggregate } from "../outputs/TracksOnPlaylistAvgAggregate";
import { TracksOnPlaylistCountAggregate } from "../outputs/TracksOnPlaylistCountAggregate";
import { TracksOnPlaylistMaxAggregate } from "../outputs/TracksOnPlaylistMaxAggregate";
import { TracksOnPlaylistMinAggregate } from "../outputs/TracksOnPlaylistMinAggregate";
import { TracksOnPlaylistSumAggregate } from "../outputs/TracksOnPlaylistSumAggregate";

@TypeGraphQL.ObjectType("AggregateTracksOnPlaylist", {
  isAbstract: true
})
export class AggregateTracksOnPlaylist {
  @TypeGraphQL.Field(_type => TracksOnPlaylistCountAggregate, {
    nullable: true
  })
  _count!: TracksOnPlaylistCountAggregate | null;

  @TypeGraphQL.Field(_type => TracksOnPlaylistAvgAggregate, {
    nullable: true
  })
  _avg!: TracksOnPlaylistAvgAggregate | null;

  @TypeGraphQL.Field(_type => TracksOnPlaylistSumAggregate, {
    nullable: true
  })
  _sum!: TracksOnPlaylistSumAggregate | null;

  @TypeGraphQL.Field(_type => TracksOnPlaylistMinAggregate, {
    nullable: true
  })
  _min!: TracksOnPlaylistMinAggregate | null;

  @TypeGraphQL.Field(_type => TracksOnPlaylistMaxAggregate, {
    nullable: true
  })
  _max!: TracksOnPlaylistMaxAggregate | null;
}
