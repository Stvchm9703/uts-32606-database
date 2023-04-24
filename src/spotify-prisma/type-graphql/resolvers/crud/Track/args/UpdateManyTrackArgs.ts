import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackUpdateManyMutationInput } from "../../../inputs/TrackUpdateManyMutationInput";
import { TrackWhereInput } from "../../../inputs/TrackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTrackArgs {
  @TypeGraphQL.Field(_type => TrackUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  where?: TrackWhereInput | undefined;
}
