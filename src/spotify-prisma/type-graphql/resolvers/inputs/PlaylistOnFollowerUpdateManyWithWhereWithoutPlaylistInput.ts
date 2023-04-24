import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerScalarWhereInput } from "../inputs/PlaylistOnFollowerScalarWhereInput";
import { PlaylistOnFollowerUpdateManyMutationInput } from "../inputs/PlaylistOnFollowerUpdateManyMutationInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerScalarWhereInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerScalarWhereInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlaylistOnFollowerUpdateManyMutationInput;
}
