import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateWithoutTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateWithoutTrackInput {
  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput, {
    nullable: true
  })
  Artists?: ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput | undefined;
}
