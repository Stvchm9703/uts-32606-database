import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput";
import { TracksOnPlaylistCreateNestedManyWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateNestedManyWithoutPlaylistInput";
import { UserCreateNestedOneWithoutPlaylistInput } from "../inputs/UserCreateNestedOneWithoutPlaylistInput";

@TypeGraphQL.InputType("PlaylistCreateInput", {
  isAbstract: true
})
export class PlaylistCreateInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  collaborative!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  snapshotId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  primaryColor?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tracksIds!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagesId?: string | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateNestedManyWithoutPlaylistInput, {
    nullable: true
  })
  tracks?: TracksOnPlaylistCreateNestedManyWithoutPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPlaylistInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutPlaylistInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput, {
    nullable: true
  })
  followers?: PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput | undefined;
}
