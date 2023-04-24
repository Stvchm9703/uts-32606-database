import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingOrderByWithRelationInput } from "../../../inputs/ArtistOnFollowingOrderByWithRelationInput";
import { ArtistOnFollowingWhereInput } from "../../../inputs/ArtistOnFollowingWhereInput";
import { ArtistOnFollowingWhereUniqueInput } from "../../../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  where?: ArtistOnFollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ArtistOnFollowingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArtistOnFollowingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
