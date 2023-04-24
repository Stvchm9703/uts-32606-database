import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutArtistsInput } from "../inputs/TrackCreateWithoutArtistsInput";
import { TrackUpdateWithoutArtistsInput } from "../inputs/TrackUpdateWithoutArtistsInput";

@TypeGraphQL.InputType("TrackUpsertWithoutArtistsInput", {
  isAbstract: true
})
export class TrackUpsertWithoutArtistsInput {
  @TypeGraphQL.Field(_type => TrackUpdateWithoutArtistsInput, {
    nullable: false
  })
  update!: TrackUpdateWithoutArtistsInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: TrackCreateWithoutArtistsInput;
}
