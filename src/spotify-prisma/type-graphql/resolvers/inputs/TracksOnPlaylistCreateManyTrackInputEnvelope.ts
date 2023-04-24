import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateManyTrackInput } from "../inputs/TracksOnPlaylistCreateManyTrackInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateManyTrackInputEnvelope", {
  isAbstract: true
})
export class TracksOnPlaylistCreateManyTrackInputEnvelope {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateManyTrackInput], {
    nullable: false
  })
  data!: TracksOnPlaylistCreateManyTrackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
