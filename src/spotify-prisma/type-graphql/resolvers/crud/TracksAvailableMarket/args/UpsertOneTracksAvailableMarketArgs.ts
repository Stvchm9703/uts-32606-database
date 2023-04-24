import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketCreateInput } from "../../../inputs/TracksAvailableMarketCreateInput";
import { TracksAvailableMarketUpdateInput } from "../../../inputs/TracksAvailableMarketUpdateInput";
import { TracksAvailableMarketWhereUniqueInput } from "../../../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateInput, {
    nullable: false
  })
  create!: TracksAvailableMarketCreateInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateInput, {
    nullable: false
  })
  update!: TracksAvailableMarketUpdateInput;
}
