import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateOrConnectWithoutArtistsInput } from "../inputs/AlbumCreateOrConnectWithoutArtistsInput";
import { AlbumCreateWithoutArtistsInput } from "../inputs/AlbumCreateWithoutArtistsInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumCreateNestedOneWithoutArtistsInput", {
  isAbstract: true
})
export class AlbumCreateNestedOneWithoutArtistsInput {
  @TypeGraphQL.Field(_type => AlbumCreateWithoutArtistsInput, {
    nullable: true
  })
  create?: AlbumCreateWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumCreateOrConnectWithoutArtistsInput, {
    nullable: true
  })
  connectOrCreate?: AlbumCreateOrConnectWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  connect?: AlbumWhereUniqueInput | undefined;
}
