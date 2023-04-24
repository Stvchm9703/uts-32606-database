import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackCreateInput } from "../../../inputs/TrackCreateInput";
import { TrackUpdateInput } from "../../../inputs/TrackUpdateInput";
import { TrackWhereUniqueInput } from "../../../inputs/TrackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTrackArgs {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackCreateInput, {
    nullable: false
  })
  create!: TrackCreateInput;

  @TypeGraphQL.Field(_type => TrackUpdateInput, {
    nullable: false
  })
  update!: TrackUpdateInput;
}
