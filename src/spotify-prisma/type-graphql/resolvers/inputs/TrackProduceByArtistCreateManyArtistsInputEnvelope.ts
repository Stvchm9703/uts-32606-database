import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateManyArtistsInput } from "../inputs/TrackProduceByArtistCreateManyArtistsInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateManyArtistsInputEnvelope", {
  isAbstract: true
})
export class TrackProduceByArtistCreateManyArtistsInputEnvelope {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateManyArtistsInput], {
    nullable: false
  })
  data!: TrackProduceByArtistCreateManyArtistsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
