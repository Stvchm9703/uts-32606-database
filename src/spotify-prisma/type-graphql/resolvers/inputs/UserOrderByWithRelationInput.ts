import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingOrderByRelationAggregateInput } from "../inputs/ArtistOnFollowingOrderByRelationAggregateInput";
import { PlaylistOnFollowerOrderByRelationAggregateInput } from "../inputs/PlaylistOnFollowerOrderByRelationAggregateInput";
import { PlaylistOrderByRelationAggregateInput } from "../inputs/PlaylistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  explicitContentFilterEnabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  explicitContentFilterLocked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imagesId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlaylistOrderByRelationAggregateInput, {
    nullable: true
  })
  Playlist?: PlaylistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerOrderByRelationAggregateInput, {
    nullable: true
  })
  FollowPlaylists?: PlaylistOnFollowerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingOrderByRelationAggregateInput, {
    nullable: true
  })
  FollowingArtists?: ArtistOnFollowingOrderByRelationAggregateInput | undefined;
}
