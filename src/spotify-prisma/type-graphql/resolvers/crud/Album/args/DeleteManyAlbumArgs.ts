import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumWhereInput } from "../../../inputs/AlbumWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumWhereInput, {
    nullable: true
  })
  where?: AlbumWhereInput | undefined;
}
