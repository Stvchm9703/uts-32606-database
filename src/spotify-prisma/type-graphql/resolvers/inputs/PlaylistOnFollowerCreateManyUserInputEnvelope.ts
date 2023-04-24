import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateManyUserInput } from "../inputs/PlaylistOnFollowerCreateManyUserInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateManyUserInput], {
    nullable: false
  })
  data!: PlaylistOnFollowerCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
