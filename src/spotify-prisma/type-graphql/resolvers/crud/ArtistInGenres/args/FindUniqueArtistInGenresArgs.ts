import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresWhereUniqueInput } from "../../../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;
}
