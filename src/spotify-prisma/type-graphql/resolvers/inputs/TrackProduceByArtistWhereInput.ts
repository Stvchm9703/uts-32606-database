import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistRelationFilter } from "../inputs/ArtistRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TrackRelationFilter } from "../inputs/TrackRelationFilter";

@TypeGraphQL.InputType("TrackProduceByArtistWhereInput", {
  isAbstract: true
})
export class TrackProduceByArtistWhereInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereInput], {
    nullable: true
  })
  AND?: TrackProduceByArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereInput], {
    nullable: true
  })
  OR?: TrackProduceByArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereInput], {
    nullable: true
  })
  NOT?: TrackProduceByArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TrackRelationFilter, {
    nullable: true
  })
  Track?: TrackRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistRelationFilter, {
    nullable: true
  })
  Artists?: ArtistRelationFilter | undefined;
}
