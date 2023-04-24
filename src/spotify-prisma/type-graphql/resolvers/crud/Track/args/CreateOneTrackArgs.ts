import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackCreateInput } from "../../../inputs/TrackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTrackArgs {
  @TypeGraphQL.Field(_type => TrackCreateInput, {
    nullable: false
  })
  data!: TrackCreateInput;
}
