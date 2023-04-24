import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateNestedOneWithoutArtistsInput } from "../inputs/TrackCreateNestedOneWithoutArtistsInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateWithoutArtistsInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateWithoutArtistsInput {
  @TypeGraphQL.Field(_type => TrackCreateNestedOneWithoutArtistsInput, {
    nullable: false
  })
  Track!: TrackCreateNestedOneWithoutArtistsInput;
}
