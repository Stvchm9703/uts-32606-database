import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackOrderByWithRelationInput } from "../../../inputs/TrackOrderByWithRelationInput";
import { TrackWhereInput } from "../../../inputs/TrackWhereInput";
import { TrackWhereUniqueInput } from "../../../inputs/TrackWhereUniqueInput";
import { TrackScalarFieldEnum } from "../../../../enums/TrackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTrackArgs {
  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  where?: TrackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TrackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TrackScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "uid" | "name" | "discNumber" | "durationMs" | "explicit" | "popularity" | "previewUrl" | "trackNumber" | "isLocal" | "albumId"> | undefined;
}
