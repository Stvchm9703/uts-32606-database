import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketUpdateWithoutTrackInput } from "../inputs/TracksAvailableMarketUpdateWithoutTrackInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateWithoutTrackInput, {
    nullable: false
  })
  data!: TracksAvailableMarketUpdateWithoutTrackInput;
}
