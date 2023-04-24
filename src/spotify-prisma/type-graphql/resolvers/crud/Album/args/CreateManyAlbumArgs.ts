import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumCreateManyInput } from "../../../inputs/AlbumCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAlbumArgs {
  @TypeGraphQL.Field(_type => [AlbumCreateManyInput], {
    nullable: false
  })
  data!: AlbumCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
