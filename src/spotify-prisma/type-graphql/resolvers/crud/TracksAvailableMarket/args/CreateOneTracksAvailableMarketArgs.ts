import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketCreateInput } from "../../../inputs/TracksAvailableMarketCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateInput, {
    nullable: false
  })
  data!: TracksAvailableMarketCreateInput;
}
