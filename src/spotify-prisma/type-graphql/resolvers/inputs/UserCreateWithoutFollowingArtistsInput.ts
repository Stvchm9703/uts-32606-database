import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedManyWithoutOwnerInput } from "../inputs/PlaylistCreateNestedManyWithoutOwnerInput";
import { PlaylistOnFollowerCreateNestedManyWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutFollowingArtistsInput", {
  isAbstract: true
})
export class UserCreateWithoutFollowingArtistsInput {
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

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  FollowPlaylists?: PlaylistOnFollowerCreateNestedManyWithoutUserInput | undefined;
}
