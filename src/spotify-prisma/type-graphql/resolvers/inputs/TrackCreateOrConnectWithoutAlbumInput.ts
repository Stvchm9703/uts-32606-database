import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateWithoutAlbumInput } from "../inputs/TrackCreateWithoutAlbumInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackCreateOrConnectWithoutAlbumInput", {
  isAbstract: true
})
export class TrackCreateOrConnectWithoutAlbumInput {
  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: false
  })
  where!: TrackWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackCreateWithoutAlbumInput, {
    nullable: false
  })
  create!: TrackCreateWithoutAlbumInput;
}
