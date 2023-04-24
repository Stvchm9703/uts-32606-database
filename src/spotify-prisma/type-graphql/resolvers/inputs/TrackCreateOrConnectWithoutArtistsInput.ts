import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutArtistsInput } from "../inputs/TrackCreateWithoutArtistsInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackCreateOrConnectWithoutArtistsInput", {
  isAbstract: true
})
export class TrackCreateOrConnectWithoutArtistsInput {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: TrackCreateWithoutArtistsInput;
}
