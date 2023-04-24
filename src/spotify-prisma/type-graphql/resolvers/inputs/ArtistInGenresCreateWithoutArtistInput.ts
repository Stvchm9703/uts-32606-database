import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutArtistInGenresInput } from "../inputs/TagCreateNestedOneWithoutArtistInGenresInput";

@TypeGraphQL.InputType("ArtistInGenresCreateWithoutArtistInput", {
  isAbstract: true
})
export class ArtistInGenresCreateWithoutArtistInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutArtistInGenresInput, {
    nullable: false
  })
  Tag!: TagCreateNestedOneWithoutArtistInGenresInput;
}
