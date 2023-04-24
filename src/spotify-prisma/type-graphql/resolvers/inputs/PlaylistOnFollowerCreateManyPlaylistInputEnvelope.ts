import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateManyPlaylistInput } from "../inputs/PlaylistOnFollowerCreateManyPlaylistInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateManyPlaylistInputEnvelope", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateManyPlaylistInputEnvelope {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateManyPlaylistInput], {
    nullable: false
  })
  data!: PlaylistOnFollowerCreateManyPlaylistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
