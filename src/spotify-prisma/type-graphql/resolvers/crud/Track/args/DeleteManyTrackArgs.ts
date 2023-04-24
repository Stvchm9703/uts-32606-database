import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackWhereInput } from "../../../inputs/TrackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTrackArgs {
  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  where?: TrackWhereInput | undefined;
}
