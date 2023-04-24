import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateManyTagInput } from "../inputs/TracksAvailableMarketCreateManyTagInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class TracksAvailableMarketCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateManyTagInput], {
    nullable: false
  })
  data!: TracksAvailableMarketCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
