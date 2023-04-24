import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutInPlaylistInput } from "../inputs/TrackCreateWithoutInPlaylistInput";
import { TrackUpdateWithoutInPlaylistInput } from "../inputs/TrackUpdateWithoutInPlaylistInput";

@TypeGraphQL.InputType("TrackUpsertWithoutInPlaylistInput", {
  isAbstract: true
})
export class TrackUpsertWithoutInPlaylistInput {
  @TypeGraphQL.Field(_type => TrackUpdateWithoutInPlaylistInput, {
    nullable: false
  })
  update!: TrackUpdateWithoutInPlaylistInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutInPlaylistInput, {
    nullable: false
  })
  create!: TrackCreateWithoutInPlaylistInput;
}
