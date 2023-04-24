import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutArtistInGenresInput } from "../inputs/TagCreateOrConnectWithoutArtistInGenresInput";
import { TagCreateWithoutArtistInGenresInput } from "../inputs/TagCreateWithoutArtistInGenresInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutArtistInGenresInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutArtistInGenresInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutArtistInGenresInput, {
    nullable: true
  })
  create?: TagCreateWithoutArtistInGenresInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutArtistInGenresInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutArtistInGenresInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
