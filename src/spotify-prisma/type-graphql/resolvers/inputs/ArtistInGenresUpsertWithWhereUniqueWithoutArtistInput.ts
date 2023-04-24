import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateWithoutArtistInput } from "../inputs/ArtistInGenresCreateWithoutArtistInput";
import { ArtistInGenresUpdateWithoutArtistInput } from "../inputs/ArtistInGenresUpdateWithoutArtistInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput", {
  isAbstract: true
})
export class ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateWithoutArtistInput, {
    nullable: false
  })
  update!: ArtistInGenresUpdateWithoutArtistInput;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateWithoutArtistInput, {
    nullable: false
  })
  create!: ArtistInGenresCreateWithoutArtistInput;
}
