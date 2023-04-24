import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateWithoutTrackInput";
import { TracksAvailableMarketUpdateWithoutTrackInput } from "../inputs/TracksAvailableMarketUpdateWithoutTrackInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateWithoutTrackInput, {
    nullable: false
  })
  update!: TracksAvailableMarketUpdateWithoutTrackInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateWithoutTrackInput, {
    nullable: false
  })
  create!: TracksAvailableMarketCreateWithoutTrackInput;
}
