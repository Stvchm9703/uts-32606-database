import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistCreateManyInput } from "../../../inputs/TrackProduceByArtistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateManyInput], {
    nullable: false
  })
  data!: TrackProduceByArtistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
