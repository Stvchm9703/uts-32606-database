import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresUpdateManyMutationInput } from "../../../inputs/ArtistInGenresUpdateManyMutationInput";
import { ArtistInGenresWhereInput } from "../../../inputs/ArtistInGenresWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistInGenresUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  where?: ArtistInGenresWhereInput | undefined;
}
