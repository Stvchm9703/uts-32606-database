import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketUpdateManyMutationInput } from "../../../inputs/TracksAvailableMarketUpdateManyMutationInput";
import { TracksAvailableMarketWhereInput } from "../../../inputs/TracksAvailableMarketWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateManyMutationInput, {
    nullable: false
  })
  data!: TracksAvailableMarketUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  where?: TracksAvailableMarketWhereInput | undefined;
}
