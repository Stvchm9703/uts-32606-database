import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutGenresInput } from "../inputs/ArtistCreateNestedOneWithoutGenresInput";
import { TagCreateNestedOneWithoutArtistInGenresInput } from "../inputs/TagCreateNestedOneWithoutArtistInGenresInput";

@TypeGraphQL.InputType("ArtistInGenresCreateInput", {
  isAbstract: true
})
export class ArtistInGenresCreateInput {
  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutGenresInput, {
    nullable: false
  })
  Artist!: ArtistCreateNestedOneWithoutGenresInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutArtistInGenresInput, {
    nullable: false
  })
  Tag!: TagCreateNestedOneWithoutArtistInGenresInput;
}
