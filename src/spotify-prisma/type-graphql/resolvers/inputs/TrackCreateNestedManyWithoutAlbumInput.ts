import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateManyAlbumInputEnvelope } from "../inputs/TrackCreateManyAlbumInputEnvelope";
import { TrackCreateOrConnectWithoutAlbumInput } from "../inputs/TrackCreateOrConnectWithoutAlbumInput";
import { TrackCreateWithoutAlbumInput } from "../inputs/TrackCreateWithoutAlbumInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackCreateNestedManyWithoutAlbumInput", {
  isAbstract: true
})
export class TrackCreateNestedManyWithoutAlbumInput {
  @TypeGraphQL.Field(_type => [TrackCreateWithoutAlbumInput], {
    nullable: true
  })
  create?: TrackCreateWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackCreateOrConnectWithoutAlbumInput], {
    nullable: true
  })
  connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackCreateManyAlbumInputEnvelope, {
    nullable: true
  })
  createMany?: TrackCreateManyAlbumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereUniqueInput], {
    nullable: true
  })
  connect?: TrackWhereUniqueInput[] | undefined;
}
