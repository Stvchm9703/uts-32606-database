import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumUpdateInput } from "../../../inputs/AlbumUpdateInput";
import { AlbumWhereUniqueInput } from "../../../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumUpdateInput, {
    nullable: false
  })
  data!: AlbumUpdateInput;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumWhereUniqueInput;
}
