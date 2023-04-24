import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateNestedOneWithoutTrackProduceByArtistInput";
import { TrackCreateNestedOneWithoutArtistsInput } from "../inputs/TrackCreateNestedOneWithoutArtistsInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateInput {
  @TypeGraphQL.Field(_type => TrackCreateNestedOneWithoutArtistsInput, {
    nullable: false
  })
  Track!: TrackCreateNestedOneWithoutArtistsInput;

  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutTrackProduceByArtistInput, {
    nullable: false
  })
  Artists!: ArtistCreateNestedOneWithoutTrackProduceByArtistInput;
}
