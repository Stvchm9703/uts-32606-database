import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateManyPlaylistInput } from "../inputs/TracksOnPlaylistCreateManyPlaylistInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateManyPlaylistInputEnvelope", {
  isAbstract: true
})
export class TracksOnPlaylistCreateManyPlaylistInputEnvelope {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateManyPlaylistInput], {
    nullable: false
  })
  data!: TracksOnPlaylistCreateManyPlaylistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
