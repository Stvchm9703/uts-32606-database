import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistWhereInput } from "../inputs/TracksOnPlaylistWhereInput";

@TypeGraphQL.InputType("TracksOnPlaylistListRelationFilter", {
  isAbstract: true
})
export class TracksOnPlaylistListRelationFilter {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  every?: TracksOnPlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  some?: TracksOnPlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  none?: TracksOnPlaylistWhereInput | undefined;
}
