import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresUpdateInput } from "../../../inputs/ArtistInGenresUpdateInput";
import { ArtistInGenresWhereUniqueInput } from "../../../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresUpdateInput, {
    nullable: false
  })
  data!: ArtistInGenresUpdateInput;

  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;
}
