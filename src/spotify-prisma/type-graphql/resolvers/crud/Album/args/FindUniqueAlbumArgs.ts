import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumWhereUniqueInput } from "../../../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumWhereUniqueInput;
}