import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresUpdateWithoutArtistInput } from "../inputs/ArtistInGenresUpdateWithoutArtistInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateWithoutArtistInput, {
    nullable: false
  })
  data!: ArtistInGenresUpdateWithoutArtistInput;
}
