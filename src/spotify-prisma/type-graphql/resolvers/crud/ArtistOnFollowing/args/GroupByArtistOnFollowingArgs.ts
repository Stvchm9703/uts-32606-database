import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingOrderByWithAggregationInput } from "../../../inputs/ArtistOnFollowingOrderByWithAggregationInput";
import { ArtistOnFollowingScalarWhereWithAggregatesInput } from "../../../inputs/ArtistOnFollowingScalarWhereWithAggregatesInput";
import { ArtistOnFollowingWhereInput } from "../../../inputs/ArtistOnFollowingWhereInput";
import { ArtistOnFollowingScalarFieldEnum } from "../../../../enums/ArtistOnFollowingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => ArtistOnFollowingWhereInput, {
    nullable: true
  })
  where?: ArtistOnFollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ArtistOnFollowingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"artistId" | "userId">;

  @TypeGraphQL.Field(_type => ArtistOnFollowingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArtistOnFollowingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
