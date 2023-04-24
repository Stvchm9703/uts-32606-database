import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackCreateManyInput } from "../../../inputs/TrackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTrackArgs {
  @TypeGraphQL.Field(_type => [TrackCreateManyInput], {
    nullable: false
  })
  data!: TrackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
