import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateWithoutArtistsInput } from "../inputs/AlbumCreateWithoutArtistsInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumCreateOrConnectWithoutArtistsInput", {
  isAbstract: true
})
export class AlbumCreateOrConnectWithoutArtistsInput {
  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: AlbumCreateWithoutArtistsInput;
}
