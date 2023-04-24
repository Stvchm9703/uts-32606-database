import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOrderByWithRelationInput } from "../inputs/ArtistOrderByWithRelationInput";
import { TrackOrderByWithRelationInput } from "../inputs/TrackOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TrackProduceByArtistOrderByWithRelationInput", {
  isAbstract: true
})
export class TrackProduceByArtistOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TrackOrderByWithRelationInput, {
    nullable: true
  })
  Track?: TrackOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOrderByWithRelationInput, {
    nullable: true
  })
  Artists?: ArtistOrderByWithRelationInput | undefined;
}
