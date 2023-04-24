import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerAvgAggregate } from "../outputs/PlaylistOnFollowerAvgAggregate";
import { PlaylistOnFollowerCountAggregate } from "../outputs/PlaylistOnFollowerCountAggregate";
import { PlaylistOnFollowerMaxAggregate } from "../outputs/PlaylistOnFollowerMaxAggregate";
import { PlaylistOnFollowerMinAggregate } from "../outputs/PlaylistOnFollowerMinAggregate";
import { PlaylistOnFollowerSumAggregate } from "../outputs/PlaylistOnFollowerSumAggregate";

@TypeGraphQL.ObjectType("PlaylistOnFollowerGroupBy", {
  isAbstract: true
})
export class PlaylistOnFollowerGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  playlistId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCountAggregate, {
    nullable: true
  })
  _count!: PlaylistOnFollowerCountAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerAvgAggregate, {
    nullable: true
  })
  _avg!: PlaylistOnFollowerAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerSumAggregate, {
    nullable: true
  })
  _sum!: PlaylistOnFollowerSumAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerMinAggregate, {
    nullable: true
  })
  _min!: PlaylistOnFollowerMinAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerMaxAggregate, {
    nullable: true
  })
  _max!: PlaylistOnFollowerMaxAggregate | null;
}
