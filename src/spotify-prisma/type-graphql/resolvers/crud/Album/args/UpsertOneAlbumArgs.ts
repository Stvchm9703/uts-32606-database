import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumCreateInput } from "../../../inputs/AlbumCreateInput";
import { AlbumUpdateInput } from "../../../inputs/AlbumUpdateInput";
import { AlbumWhereUniqueInput } from "../../../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumCreateInput, {
    nullable: false
  })
  create!: AlbumCreateInput;

  @TypeGraphQL.Field(_type => AlbumUpdateInput, {
    nullable: false
  })
  update!: AlbumUpdateInput;
}
