import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackOrderByWithRelationInput } from "../../../inputs/TrackOrderByWithRelationInput";
import { TrackWhereInput } from "../../../inputs/TrackWhereInput";
import { TrackWhereUniqueInput } from "../../../inputs/TrackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTrackArgs {
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
}
