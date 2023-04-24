import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutGenresInput } from "../inputs/ArtistCreateOrConnectWithoutGenresInput";
import { ArtistCreateWithoutGenresInput } from "../inputs/ArtistCreateWithoutGenresInput";
import { ArtistUpdateWithoutGenresInput } from "../inputs/ArtistUpdateWithoutGenresInput";
import { ArtistUpsertWithoutGenresInput } from "../inputs/ArtistUpsertWithoutGenresInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistUpdateOneRequiredWithoutGenresNestedInput", {
  isAbstract: true
})
export class ArtistUpdateOneRequiredWithoutGenresNestedInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutGenresInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutGenresInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpsertWithoutGenresInput, {
    nullable: true
  })
  upsert?: ArtistUpsertWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateWithoutGenresInput, {
    nullable: true
  })
  update?: ArtistUpdateWithoutGenresInput | undefined;
}
