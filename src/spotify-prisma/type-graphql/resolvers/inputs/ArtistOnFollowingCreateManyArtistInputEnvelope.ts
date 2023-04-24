import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateManyArtistInput } from "../inputs/ArtistOnFollowingCreateManyArtistInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateManyArtistInputEnvelope", {
  isAbstract: true
})
export class ArtistOnFollowingCreateManyArtistInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateManyArtistInput], {
    nullable: false
  })
  data!: ArtistOnFollowingCreateManyArtistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
