import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackWhereUniqueInput } from "../../../inputs/TrackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTrackArgs {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;
}
