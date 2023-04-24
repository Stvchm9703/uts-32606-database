import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresWhereInput } from "../../../inputs/ArtistInGenresWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  where?: ArtistInGenresWhereInput | undefined;
}
