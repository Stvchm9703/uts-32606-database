import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketWhereInput } from "../../../inputs/TracksAvailableMarketWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  where?: TracksAvailableMarketWhereInput | undefined;
}
