import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumUpdateManyMutationInput } from "../../../inputs/AlbumUpdateManyMutationInput";
import { AlbumWhereInput } from "../../../inputs/AlbumWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlbumUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AlbumWhereInput, {
    nullable: true
  })
  where?: AlbumWhereInput | undefined;
}
