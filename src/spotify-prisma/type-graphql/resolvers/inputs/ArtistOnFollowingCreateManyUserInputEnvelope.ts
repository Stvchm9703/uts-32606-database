import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateManyUserInput } from "../inputs/ArtistOnFollowingCreateManyUserInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ArtistOnFollowingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateManyUserInput], {
    nullable: false
  })
  data!: ArtistOnFollowingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
