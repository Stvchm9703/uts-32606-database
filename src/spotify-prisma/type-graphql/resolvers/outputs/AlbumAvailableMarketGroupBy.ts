import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketAvgAggregate } from "../outputs/AlbumAvailableMarketAvgAggregate";
import { AlbumAvailableMarketCountAggregate } from "../outputs/AlbumAvailableMarketCountAggregate";
import { AlbumAvailableMarketMaxAggregate } from "../outputs/AlbumAvailableMarketMaxAggregate";
import { AlbumAvailableMarketMinAggregate } from "../outputs/AlbumAvailableMarketMinAggregate";
import { AlbumAvailableMarketSumAggregate } from "../outputs/AlbumAvailableMarketSumAggregate";

@TypeGraphQL.ObjectType("AlbumAvailableMarketGroupBy", {
  isAbstract: true
})
export class AlbumAvailableMarketGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  albumId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCountAggregate, {
    nullable: true
  })
  _count!: AlbumAvailableMarketCountAggregate | null;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketAvgAggregate, {
    nullable: true
  })
  _avg!: AlbumAvailableMarketAvgAggregate | null;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketSumAggregate, {
    nullable: true
  })
  _sum!: AlbumAvailableMarketSumAggregate | null;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketMinAggregate, {
    nullable: true
  })
  _min!: AlbumAvailableMarketMinAggregate | null;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketMaxAggregate, {
    nullable: true
  })
  _max!: AlbumAvailableMarketMaxAggregate | null;
}
