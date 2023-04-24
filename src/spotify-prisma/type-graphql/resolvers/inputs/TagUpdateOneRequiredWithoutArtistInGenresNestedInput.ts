import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutArtistInGenresInput } from "../inputs/TagCreateOrConnectWithoutArtistInGenresInput";
import { TagCreateWithoutArtistInGenresInput } from "../inputs/TagCreateWithoutArtistInGenresInput";
import { TagUpdateWithoutArtistInGenresInput } from "../inputs/TagUpdateWithoutArtistInGenresInput";
import { TagUpsertWithoutArtistInGenresInput } from "../inputs/TagUpsertWithoutArtistInGenresInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutArtistInGenresNestedInput", {
  isAbstract: true
})
export class TagUpdateOneRequiredWithoutArtistInGenresNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutArtistInGenresInput, {
    nullable: true
  })
  create?: TagCreateWithoutArtistInGenresInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutArtistInGenresInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutArtistInGenresInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutArtistInGenresInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutArtistInGenresInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutArtistInGenresInput, {
    nullable: true
  })
  update?: TagUpdateWithoutArtistInGenresInput | undefined;
}
