import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingUpdateWithoutArtistInput } from "../inputs/ArtistOnFollowingUpdateWithoutArtistInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateWithoutArtistInput, {
    nullable: false
  })
  data!: ArtistOnFollowingUpdateWithoutArtistInput;
}
