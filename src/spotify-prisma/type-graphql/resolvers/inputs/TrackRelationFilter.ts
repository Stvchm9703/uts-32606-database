import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackWhereInput } from "../inputs/TrackWhereInput";

@TypeGraphQL.InputType("TrackRelationFilter", {
  isAbstract: true
})
export class TrackRelationFilter {
  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  is?: TrackWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  isNot?: TrackWhereInput | undefined;
}
