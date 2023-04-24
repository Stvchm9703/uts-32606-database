import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresOrderByWithAggregationInput } from "../../../inputs/ArtistInGenresOrderByWithAggregationInput";
import { ArtistInGenresScalarWhereWithAggregatesInput } from "../../../inputs/ArtistInGenresScalarWhereWithAggregatesInput";
import { ArtistInGenresWhereInput } from "../../../inputs/ArtistInGenresWhereInput";
import { ArtistInGenresScalarFieldEnum } from "../../../../enums/ArtistInGenresScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  where?: ArtistInGenresWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ArtistInGenresOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"artistId" | "tagId">;

  @TypeGraphQL.Field(_type => ArtistInGenresScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArtistInGenresScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
