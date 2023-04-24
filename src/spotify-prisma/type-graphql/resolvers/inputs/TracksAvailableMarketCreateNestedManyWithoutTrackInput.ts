import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateManyTrackInputEnvelope } from "../inputs/TracksAvailableMarketCreateManyTrackInputEnvelope";
import { TracksAvailableMarketCreateOrConnectWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateOrConnectWithoutTrackInput";
import { TracksAvailableMarketCreateWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateWithoutTrackInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateNestedManyWithoutTrackInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateNestedManyWithoutTrackInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateWithoutTrackInput], {
    nullable: true
  })
  create?: TracksAvailableMarketCreateWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateOrConnectWithoutTrackInput], {
    nullable: true
  })
  connectOrCreate?: TracksAvailableMarketCreateOrConnectWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateManyTrackInputEnvelope, {
    nullable: true
  })
  createMany?: TracksAvailableMarketCreateManyTrackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  connect?: TracksAvailableMarketWhereUniqueInput[] | undefined;
}
