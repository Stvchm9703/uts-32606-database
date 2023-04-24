import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresScalarWhereInput } from "../inputs/ArtistInGenresScalarWhereInput";
import { ArtistInGenresUpdateManyMutationInput } from "../inputs/ArtistInGenresUpdateManyMutationInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateManyWithWhereWithoutArtistInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateManyWithWhereWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistInGenresScalarWhereInput, {
    nullable: false
  })
  where!: ArtistInGenresScalarWhereInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistInGenresUpdateManyMutationInput;
}
