import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateWithoutArtistInput } from "../inputs/ArtistOnFollowingCreateWithoutArtistInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateOrConnectWithoutArtistInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateOrConnectWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateWithoutArtistInput, {
    nullable: false
  })
  create!: ArtistOnFollowingCreateWithoutArtistInput;
}
