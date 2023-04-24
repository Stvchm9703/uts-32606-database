import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateOrConnectWithoutAvailableMarketsInput } from "../inputs/TrackCreateOrConnectWithoutAvailableMarketsInput";
import { TrackCreateWithoutAvailableMarketsInput } from "../inputs/TrackCreateWithoutAvailableMarketsInput";
import { TrackUpdateWithoutAvailableMarketsInput } from "../inputs/TrackUpdateWithoutAvailableMarketsInput";
import { TrackUpsertWithoutAvailableMarketsInput } from "../inputs/TrackUpsertWithoutAvailableMarketsInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput", {
  isAbstract: true
})
export class TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput {
  @TypeGraphQL.Field(_type => TrackCreateWithoutAvailableMarketsInput, {
    nullable: true
  })
  create?: TrackCreateWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => TrackCreateOrConnectWithoutAvailableMarketsInput, {
    nullable: true
  })
  connectOrCreate?: TrackCreateOrConnectWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpsertWithoutAvailableMarketsInput, {
    nullable: true
  })
  upsert?: TrackUpsertWithoutAvailableMarketsInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: true
  })
  connect?: TrackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpdateWithoutAvailableMarketsInput, {
    nullable: true
  })
  update?: TrackUpdateWithoutAvailableMarketsInput | undefined;
}
