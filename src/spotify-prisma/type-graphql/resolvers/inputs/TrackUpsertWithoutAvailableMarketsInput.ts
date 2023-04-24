import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutAvailableMarketsInput } from "../inputs/TrackCreateWithoutAvailableMarketsInput";
import { TrackUpdateWithoutAvailableMarketsInput } from "../inputs/TrackUpdateWithoutAvailableMarketsInput";

@TypeGraphQL.InputType("TrackUpsertWithoutAvailableMarketsInput", {
  isAbstract: true
})
export class TrackUpsertWithoutAvailableMarketsInput {
  @TypeGraphQL.Field(_type => TrackUpdateWithoutAvailableMarketsInput, {
    nullable: false
  })
  update!: TrackUpdateWithoutAvailableMarketsInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutAvailableMarketsInput, {
    nullable: false
  })
  create!: TrackCreateWithoutAvailableMarketsInput;
}
