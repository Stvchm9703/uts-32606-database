import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketUpdateInput } from "../../../inputs/TracksAvailableMarketUpdateInput";
import { TracksAvailableMarketWhereUniqueInput } from "../../../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateInput, {
    nullable: false
  })
  data!: TracksAvailableMarketUpdateInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;
}
