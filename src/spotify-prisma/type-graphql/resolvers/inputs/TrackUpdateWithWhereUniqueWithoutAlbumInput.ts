import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackUpdateWithoutAlbumInput } from "../inputs/TrackUpdateWithoutAlbumInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackUpdateWithWhereUniqueWithoutAlbumInput", {
  isAbstract: true
})
export class TrackUpdateWithWhereUniqueWithoutAlbumInput {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackUpdateWithoutAlbumInput, {
    nullable: false
  })
  data!: TrackUpdateWithoutAlbumInput;
}
