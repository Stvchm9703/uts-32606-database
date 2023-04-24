import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateNestedManyWithoutUserInput } from "../inputs/ArtistOnFollowingCreateNestedManyWithoutUserInput";
import { PlaylistCreateNestedManyWithoutOwnerInput } from "../inputs/PlaylistCreateNestedManyWithoutOwnerInput";

@TypeGraphQL.InputType("UserCreateWithoutFollowPlaylistsInput", {
  isAbstract: true
})
export class UserCreateWithoutFollowPlaylistsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uid?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicitContentFilterEnabled!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicitContentFilterLocked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagesId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  product!: string;

  @TypeGraphQL.Field(_type => PlaylistCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  Playlist?: PlaylistCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  FollowingArtists?: ArtistOnFollowingCreateNestedManyWithoutUserInput | undefined;
}
