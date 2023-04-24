import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutAlbumInput } from "../inputs/TrackCreateWithoutAlbumInput";
import { TrackUpdateWithoutAlbumInput } from "../inputs/TrackUpdateWithoutAlbumInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackUpsertWithWhereUniqueWithoutAlbumInput", {
  isAbstract: true
})
export class TrackUpsertWithWhereUniqueWithoutAlbumInput {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackUpdateWithoutAlbumInput, {
    nullable: false
  })
  update!: TrackUpdateWithoutAlbumInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutAlbumInput, {
    nullable: false
  })
  create!: TrackCreateWithoutAlbumInput;
}
