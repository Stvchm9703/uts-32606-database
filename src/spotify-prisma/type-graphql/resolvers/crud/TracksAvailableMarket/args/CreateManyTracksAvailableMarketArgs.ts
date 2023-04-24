import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketCreateManyInput } from "../../../inputs/TracksAvailableMarketCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateManyInput], {
    nullable: false
  })
  data!: TracksAvailableMarketCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
