import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateNestedOneWithoutTrackProduceByArtistInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateWithoutTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateWithoutTrackInput {
  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutTrackProduceByArtistInput, {
    nullable: false
  })
  Artists!: ArtistCreateNestedOneWithoutTrackProduceByArtistInput;
}
