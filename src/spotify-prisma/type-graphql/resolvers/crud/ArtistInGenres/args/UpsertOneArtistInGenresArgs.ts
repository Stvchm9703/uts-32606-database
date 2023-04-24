import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresCreateInput } from "../../../inputs/ArtistInGenresCreateInput";
import { ArtistInGenresUpdateInput } from "../../../inputs/ArtistInGenresUpdateInput";
import { ArtistInGenresWhereUniqueInput } from "../../../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInGenresWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateInput, {
    nullable: false
  })
  create!: ArtistInGenresCreateInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateInput, {
    nullable: false
  })
  update!: ArtistInGenresUpdateInput;
}
