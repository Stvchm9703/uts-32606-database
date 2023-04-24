import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutAvailableMarketsInput } from "../inputs/TrackCreateWithoutAvailableMarketsInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackCreateOrConnectWithoutAvailableMarketsInput", {
  isAbstract: true
})
export class TrackCreateOrConnectWithoutAvailableMarketsInput {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutAvailableMarketsInput, {
    nullable: false
  })
  create!: TrackCreateWithoutAvailableMarketsInput;
}
