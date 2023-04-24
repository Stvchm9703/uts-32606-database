import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutGenresInput } from "../inputs/ArtistCreateNestedOneWithoutGenresInput";

@TypeGraphQL.InputType("ArtistInGenresCreateWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutGenresInput, {
    nullable: false
  })
  Artist!: ArtistCreateNestedOneWithoutGenresInput;
}
