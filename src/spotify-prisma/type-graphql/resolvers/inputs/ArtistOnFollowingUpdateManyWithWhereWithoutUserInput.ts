import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingScalarWhereInput } from "../inputs/ArtistOnFollowingScalarWhereInput";
import { ArtistOnFollowingUpdateManyMutationInput } from "../inputs/ArtistOnFollowingUpdateManyMutationInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingScalarWhereInput, {
    nullable: false
  })
  where!: ArtistOnFollowingScalarWhereInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistOnFollowingUpdateManyMutationInput;
}
