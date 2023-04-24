import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput";
import { TrackUpdateOneRequiredWithoutArtistsNestedInput } from "../inputs/TrackUpdateOneRequiredWithoutArtistsNestedInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateInput {
  @TypeGraphQL.Field(_type => TrackUpdateOneRequiredWithoutArtistsNestedInput, {
    nullable: true
  })
  Track?: TrackUpdateOneRequiredWithoutArtistsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput, {
    nullable: true
  })
  Artists?: ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput | undefined;
}
