import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketWhereUniqueInput } from "../../../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;
}
