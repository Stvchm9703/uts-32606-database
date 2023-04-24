import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackOrderByWithAggregationInput } from "../../../inputs/TrackOrderByWithAggregationInput";
import { TrackScalarWhereWithAggregatesInput } from "../../../inputs/TrackScalarWhereWithAggregatesInput";
import { TrackWhereInput } from "../../../inputs/TrackWhereInput";
import { TrackScalarFieldEnum } from "../../../../enums/TrackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTrackArgs {
  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  where?: TrackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TrackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "uid" | "name" | "discNumber" | "durationMs" | "explicit" | "popularity" | "previewUrl" | "trackNumber" | "isLocal" | "albumId">;

  @TypeGraphQL.Field(_type => TrackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TrackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
