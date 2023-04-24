import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateManyTrackInput } from "../inputs/TrackProduceByArtistCreateManyTrackInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateManyTrackInputEnvelope", {
  isAbstract: true
})
export class TrackProduceByArtistCreateManyTrackInputEnvelope {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateManyTrackInput], {
    nullable: false
  })
  data!: TrackProduceByArtistCreateManyTrackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
