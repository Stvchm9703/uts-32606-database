import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateWithoutTrackProduceByArtistInput";
import { ArtistUpdateWithoutTrackProduceByArtistInput } from "../inputs/ArtistUpdateWithoutTrackProduceByArtistInput";

@TypeGraphQL.InputType("ArtistUpsertWithoutTrackProduceByArtistInput", {
  isAbstract: true
})
export class ArtistUpsertWithoutTrackProduceByArtistInput {
  @TypeGraphQL.Field(_type => ArtistUpdateWithoutTrackProduceByArtistInput, {
    nullable: false
  })
  update!: ArtistUpdateWithoutTrackProduceByArtistInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutTrackProduceByArtistInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutTrackProduceByArtistInput;
}
