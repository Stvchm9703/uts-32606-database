import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PlaylistRelationFilter } from "../inputs/PlaylistRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PlaylistOnFollowerWhereInput", {
  isAbstract: true
})
export class PlaylistOnFollowerWhereInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereInput], {
    nullable: true
  })
  AND?: PlaylistOnFollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereInput], {
    nullable: true
  })
  OR?: PlaylistOnFollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereInput], {
    nullable: true
  })
  NOT?: PlaylistOnFollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  playlistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PlaylistRelationFilter, {
    nullable: true
  })
  Playlist?: PlaylistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;
}
