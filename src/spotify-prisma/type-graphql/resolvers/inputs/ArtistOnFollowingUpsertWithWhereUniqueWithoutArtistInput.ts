import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateWithoutArtistInput } from "../inputs/ArtistOnFollowingCreateWithoutArtistInput";
import { ArtistOnFollowingUpdateWithoutArtistInput } from "../inputs/ArtistOnFollowingUpdateWithoutArtistInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistOnFollowingWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateWithoutArtistInput, {
    nullable: false
  })
  update!: ArtistOnFollowingUpdateWithoutArtistInput;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateWithoutArtistInput, {
    nullable: false
  })
  create!: ArtistOnFollowingCreateWithoutArtistInput;
}
