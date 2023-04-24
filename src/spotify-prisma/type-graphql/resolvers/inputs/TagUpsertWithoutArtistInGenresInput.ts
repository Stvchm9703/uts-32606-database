import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutArtistInGenresInput } from "../inputs/TagCreateWithoutArtistInGenresInput";
import { TagUpdateWithoutArtistInGenresInput } from "../inputs/TagUpdateWithoutArtistInGenresInput";

@TypeGraphQL.InputType("TagUpsertWithoutArtistInGenresInput", {
  isAbstract: true
})
export class TagUpsertWithoutArtistInGenresInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutArtistInGenresInput, {
    nullable: false
  })
  update!: TagUpdateWithoutArtistInGenresInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutArtistInGenresInput, {
    nullable: false
  })
  create!: TagCreateWithoutArtistInGenresInput;
}
