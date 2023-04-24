import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackWhereInput } from "../inputs/TrackWhereInput";

@TypeGraphQL.InputType("TrackListRelationFilter", {
  isAbstract: true
})
export class TrackListRelationFilter {
  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  every?: TrackWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  some?: TrackWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereInput, {
    nullable: true
  })
  none?: TrackWhereInput | undefined;
}
