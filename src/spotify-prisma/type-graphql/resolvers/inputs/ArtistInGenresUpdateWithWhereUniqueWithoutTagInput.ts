import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresUpdateWithoutTagInput } from "../inputs/ArtistInGenresUpdateWithoutTagInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateWithoutTagInput, {
    nullable: false
  })
  data!: ArtistInGenresUpdateWithoutTagInput;
}
