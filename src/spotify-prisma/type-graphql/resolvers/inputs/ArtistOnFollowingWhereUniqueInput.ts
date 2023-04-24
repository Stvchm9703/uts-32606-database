import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingUserIdArtistIdCompoundUniqueInput } from "../inputs/ArtistOnFollowingUserIdArtistIdCompoundUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingWhereUniqueInput", {
  isAbstract: true
})
export class ArtistOnFollowingWhereUniqueInput {
  @TypeGraphQL.Field(_type => ArtistOnFollowingUserIdArtistIdCompoundUniqueInput, {
    nullable: true
  })
  userId_artistId?: ArtistOnFollowingUserIdArtistIdCompoundUniqueInput | undefined;
}
