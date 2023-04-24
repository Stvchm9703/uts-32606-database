import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistScalarWhereInput } from "../inputs/TracksOnPlaylistScalarWhereInput";
import { TracksOnPlaylistUpdateManyMutationInput } from "../inputs/TracksOnPlaylistUpdateManyMutationInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistScalarWhereInput, {
    nullable: false
  })
  where!: TracksOnPlaylistScalarWhereInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateManyMutationInput, {
    nullable: false
  })
  data!: TracksOnPlaylistUpdateManyMutationInput;
}
