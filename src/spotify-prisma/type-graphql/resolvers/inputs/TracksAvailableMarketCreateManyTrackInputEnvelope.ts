import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateManyTrackInput } from "../inputs/TracksAvailableMarketCreateManyTrackInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateManyTrackInputEnvelope", {
  isAbstract: true
})
export class TracksAvailableMarketCreateManyTrackInputEnvelope {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateManyTrackInput], {
    nullable: false
  })
  data!: TracksAvailableMarketCreateManyTrackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
