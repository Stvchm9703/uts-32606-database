import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TracksOnPlaylistCreateManyPlaylistInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateManyPlaylistInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackId!: number;
}
