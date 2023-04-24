import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyOwnerInput } from "../inputs/PlaylistCreateManyOwnerInput";

@TypeGraphQL.InputType("PlaylistCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class PlaylistCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [PlaylistCreateManyOwnerInput], {
    nullable: false
  })
  data!: PlaylistCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
