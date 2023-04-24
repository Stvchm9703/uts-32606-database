import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateWithoutTagInput } from "../inputs/ArtistInGenresCreateWithoutTagInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateWithoutTagInput, {
    nullable: false
  })
  create!: ArtistInGenresCreateWithoutTagInput;
}
