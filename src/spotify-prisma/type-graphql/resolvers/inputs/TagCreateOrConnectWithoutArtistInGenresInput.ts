import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutArtistInGenresInput } from "../inputs/TagCreateWithoutArtistInGenresInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutArtistInGenresInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutArtistInGenresInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutArtistInGenresInput, {
    nullable: false
  })
  create!: TagCreateWithoutArtistInGenresInput;
}
