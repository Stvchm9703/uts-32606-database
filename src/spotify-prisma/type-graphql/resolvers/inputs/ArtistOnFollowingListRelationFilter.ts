import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingWhereInput } from "../inputs/ArtistOnFollowingWhereInput";

@TypeGraphQL.InputType("ArtistOnFollowingListRelationFilter", {
  isAbstract: true
})
export class ArtistOnFollowingListRelationFilter {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  every?: ArtistOnFollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  some?: ArtistOnFollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  none?: ArtistOnFollowingWhereInput | undefined;
}
