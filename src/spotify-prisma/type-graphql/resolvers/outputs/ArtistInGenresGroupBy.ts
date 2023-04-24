import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresAvgAggregate } from "../outputs/ArtistInGenresAvgAggregate";
import { ArtistInGenresCountAggregate } from "../outputs/ArtistInGenresCountAggregate";
import { ArtistInGenresMaxAggregate } from "../outputs/ArtistInGenresMaxAggregate";
import { ArtistInGenresMinAggregate } from "../outputs/ArtistInGenresMinAggregate";
import { ArtistInGenresSumAggregate } from "../outputs/ArtistInGenresSumAggregate";

@TypeGraphQL.ObjectType("ArtistInGenresGroupBy", {
  isAbstract: true
})
export class ArtistInGenresGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  @TypeGraphQL.Field(_type => ArtistInGenresCountAggregate, {
    nullable: true
  })
  _count!: ArtistInGenresCountAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInGenresAvgAggregate, {
    nullable: true
  })
  _avg!: ArtistInGenresAvgAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInGenresSumAggregate, {
    nullable: true
  })
  _sum!: ArtistInGenresSumAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInGenresMinAggregate, {
    nullable: true
  })
  _min!: ArtistInGenresMinAggregate | null;

  @TypeGraphQL.Field(_type => ArtistInGenresMaxAggregate, {
    nullable: true
  })
  _max!: ArtistInGenresMaxAggregate | null;
}
