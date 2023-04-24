import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateWithoutTagInput } from "../inputs/ArtistInGenresCreateWithoutTagInput";
import { ArtistInGenresUpdateWithoutTagInput } from "../inputs/ArtistInGenresUpdateWithoutTagInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateWithoutTagInput, {
    nullable: false
  })
  update!: ArtistInGenresUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateWithoutTagInput, {
    nullable: false
  })
  create!: ArtistInGenresCreateWithoutTagInput;
}
