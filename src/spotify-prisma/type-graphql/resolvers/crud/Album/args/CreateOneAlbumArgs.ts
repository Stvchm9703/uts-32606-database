import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumCreateInput } from "../../../inputs/AlbumCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumCreateInput, {
    nullable: false
  })
  data!: AlbumCreateInput;
}
