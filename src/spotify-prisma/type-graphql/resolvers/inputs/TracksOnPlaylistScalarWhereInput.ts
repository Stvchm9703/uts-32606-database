import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TracksOnPlaylistScalarWhereInput", {
  isAbstract: true
})
export class TracksOnPlaylistScalarWhereInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereInput], {
    nullable: true
  })
  AND?: TracksOnPlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereInput], {
    nullable: true
  })
  OR?: TracksOnPlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereInput], {
    nullable: true
  })
  NOT?: TracksOnPlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  playlistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackId?: IntFilter | undefined;
}
