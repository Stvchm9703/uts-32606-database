import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresScalarWhereInput } from "../inputs/ArtistInGenresScalarWhereInput";
import { ArtistInGenresUpdateManyMutationInput } from "../inputs/ArtistInGenresUpdateManyMutationInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateManyWithWhereWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => ArtistInGenresScalarWhereInput, {
    nullable: false
  })
  where!: ArtistInGenresScalarWhereInput;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistInGenresUpdateManyMutationInput;
}
