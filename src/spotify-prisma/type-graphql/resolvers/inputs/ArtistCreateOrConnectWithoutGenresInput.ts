import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutGenresInput } from "../inputs/ArtistCreateWithoutGenresInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateOrConnectWithoutGenresInput", {
  isAbstract: true
})
export class ArtistCreateOrConnectWithoutGenresInput {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutGenresInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutGenresInput;
}
