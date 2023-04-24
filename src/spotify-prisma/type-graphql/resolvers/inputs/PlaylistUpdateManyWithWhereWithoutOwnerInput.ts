import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistScalarWhereInput } from "../inputs/PlaylistScalarWhereInput";
import { PlaylistUpdateManyMutationInput } from "../inputs/PlaylistUpdateManyMutationInput";

@TypeGraphQL.InputType("PlaylistUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true
})
export class PlaylistUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => PlaylistScalarWhereInput, {
    nullable: false
  })
  where!: PlaylistScalarWhereInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlaylistUpdateManyMutationInput;
}
