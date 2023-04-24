import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateWithoutTrackInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateOrConnectWithoutTrackInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateOrConnectWithoutTrackInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateWithoutTrackInput, {
    nullable: false
  })
  create!: TracksAvailableMarketCreateWithoutTrackInput;
}
