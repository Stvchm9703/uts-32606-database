import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistAvgAggregate } from "../outputs/AlbumProduceByArtistAvgAggregate";
import { AlbumProduceByArtistCountAggregate } from "../outputs/AlbumProduceByArtistCountAggregate";
import { AlbumProduceByArtistMaxAggregate } from "../outputs/AlbumProduceByArtistMaxAggregate";
import { AlbumProduceByArtistMinAggregate } from "../outputs/AlbumProduceByArtistMinAggregate";
import { AlbumProduceByArtistSumAggregate } from "../outputs/AlbumProduceByArtistSumAggregate";

@TypeGraphQL.ObjectType("AlbumProduceByArtistGroupBy", {
  isAbstract: true
})
export class AlbumProduceByArtistGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  albumId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCountAggregate, {
    nullable: true
  })
  _count!: AlbumProduceByArtistCountAggregate | null;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistAvgAggregate, {
    nullable: true
  })
  _avg!: AlbumProduceByArtistAvgAggregate | null;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistSumAggregate, {
    nullable: true
  })
  _sum!: AlbumProduceByArtistSumAggregate | null;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistMinAggregate, {
    nullable: true
  })
  _min!: AlbumProduceByArtistMinAggregate | null;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistMaxAggregate, {
    nullable: true
  })
  _max!: AlbumProduceByArtistMaxAggregate | null;
}
