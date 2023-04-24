import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvgAggregate } from "../outputs/AlbumAvgAggregate";
import { AlbumCountAggregate } from "../outputs/AlbumCountAggregate";
import { AlbumMaxAggregate } from "../outputs/AlbumMaxAggregate";
import { AlbumMinAggregate } from "../outputs/AlbumMinAggregate";
import { AlbumSumAggregate } from "../outputs/AlbumSumAggregate";

@TypeGraphQL.ObjectType("AlbumGroupBy", {
  isAbstract: true
})
export class AlbumGroupBy {
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
  albumType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalTracks!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  releaseDatePrecision!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  albumGroup!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyrights!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl!: string | null;

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
