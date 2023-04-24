import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistAvgAggregate } from "../outputs/PlaylistAvgAggregate";
import { PlaylistCountAggregate } from "../outputs/PlaylistCountAggregate";
import { PlaylistMaxAggregate } from "../outputs/PlaylistMaxAggregate";
import { PlaylistMinAggregate } from "../outputs/PlaylistMinAggregate";
import { PlaylistSumAggregate } from "../outputs/PlaylistSumAggregate";

@TypeGraphQL.ObjectType("PlaylistGroupBy", {
  isAbstract: true
})
export class PlaylistGroupBy {
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
    nullable: true
  })
  uid!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  collaborative!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  snapshotId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  primaryColor!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tracksIds!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ownerId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagesId!: string | null;

  @TypeGraphQL.Field(_type => PlaylistCountAggregate, {
    nullable: true
  })
  _count!: PlaylistCountAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistAvgAggregate, {
    nullable: true
  })
  _avg!: PlaylistAvgAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistSumAggregate, {
    nullable: true
  })
  _sum!: PlaylistSumAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistMinAggregate, {
    nullable: true
  })
  _min!: PlaylistMinAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistMaxAggregate, {
    nullable: true
  })
  _max!: PlaylistMaxAggregate | null;
}
