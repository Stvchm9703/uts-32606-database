import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvgAggregate } from "../outputs/AlbumAvgAggregate";
import { AlbumCountAggregate } from "../outputs/AlbumCountAggregate";
import { AlbumMaxAggregate } from "../outputs/AlbumMaxAggregate";
import { AlbumMinAggregate } from "../outputs/AlbumMinAggregate";
import { AlbumSumAggregate } from "../outputs/AlbumSumAggregate";

@TypeGraphQL.ObjectType("AggregateAlbum", {
  isAbstract: true
})
export class AggregateAlbum {
  @TypeGraphQL.Field(_type => AlbumCountAggregate, {
    nullable: true
  })
  _count!: AlbumCountAggregate | null;

  @TypeGraphQL.Field(_type => AlbumAvgAggregate, {
    nullable: true
  })
  _avg!: AlbumAvgAggregate | null;

  @TypeGraphQL.Field(_type => AlbumSumAggregate, {
    nullable: true
  })
  _sum!: AlbumSumAggregate | null;

  @TypeGraphQL.Field(_type => AlbumMinAggregate, {
    nullable: true
  })
  _min!: AlbumMinAggregate | null;

  @TypeGraphQL.Field(_type => AlbumMaxAggregate, {
    nullable: true
  })
  _max!: AlbumMaxAggregate | null;
}
