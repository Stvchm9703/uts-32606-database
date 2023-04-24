import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateOrConnectWithoutArtistsInput } from "../inputs/AlbumCreateOrConnectWithoutArtistsInput";
import { AlbumCreateWithoutArtistsInput } from "../inputs/AlbumCreateWithoutArtistsInput";
import { AlbumUpdateWithoutArtistsInput } from "../inputs/AlbumUpdateWithoutArtistsInput";
import { AlbumUpsertWithoutArtistsInput } from "../inputs/AlbumUpsertWithoutArtistsInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumUpdateOneRequiredWithoutArtistsNestedInput", {
  isAbstract: true
})
export class AlbumUpdateOneRequiredWithoutArtistsNestedInput {
  @TypeGraphQL.Field(_type => AlbumCreateWithoutArtistsInput, {
    nullable: true
  })
  create?: AlbumCreateWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumCreateOrConnectWithoutArtistsInput, {
    nullable: true
  })
  connectOrCreate?: AlbumCreateOrConnectWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumUpsertWithoutArtistsInput, {
    nullable: true
  })
  upsert?: AlbumUpsertWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  connect?: AlbumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AlbumUpdateWithoutArtistsInput, {
    nullable: true
  })
  update?: AlbumUpdateWithoutArtistsInput | undefined;
}
