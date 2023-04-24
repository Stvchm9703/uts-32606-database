import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresCreateInput } from "../../../inputs/ArtistInGenresCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresCreateInput, {
    nullable: false
  })
  data!: ArtistInGenresCreateInput;
}
