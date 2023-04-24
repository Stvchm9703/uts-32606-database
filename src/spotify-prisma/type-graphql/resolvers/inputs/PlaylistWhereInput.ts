import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PlaylistOnFollowerListRelationFilter } from "../inputs/PlaylistOnFollowerListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TracksOnPlaylistListRelationFilter } from "../inputs/TracksOnPlaylistListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PlaylistWhereInput", {
  isAbstract: true
})
export class PlaylistWhereInput {
  @TypeGraphQL.Field(_type => [PlaylistWhereInput], {
    nullable: true
  })
  AND?: PlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereInput], {
    nullable: true
  })
  OR?: PlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereInput], {
    nullable: true
  })
  NOT?: PlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  uid?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  collaborative?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  public?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  snapshotId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  primaryColor?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tracksIds?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ownerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  imagesId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistListRelationFilter, {
    nullable: true
  })
  tracks?: TracksOnPlaylistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerListRelationFilter, {
    nullable: true
  })
  followers?: PlaylistOnFollowerListRelationFilter | undefined;
}
