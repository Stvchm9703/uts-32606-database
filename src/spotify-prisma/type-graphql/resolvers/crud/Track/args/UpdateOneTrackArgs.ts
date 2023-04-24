import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackUpdateInput } from "../../../inputs/TrackUpdateInput";
import { TrackWhereUniqueInput } from "../../../inputs/TrackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTrackArgs {
  @TypeGraphQL.Field(_type => TrackUpdateInput, {
    nullable: false
  })
  data!: TrackUpdateInput;

  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;
}
