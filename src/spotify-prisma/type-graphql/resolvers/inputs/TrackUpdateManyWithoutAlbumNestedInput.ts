import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateManyAlbumInputEnvelope } from "../inputs/TrackCreateManyAlbumInputEnvelope";
import { TrackCreateOrConnectWithoutAlbumInput } from "../inputs/TrackCreateOrConnectWithoutAlbumInput";
import { TrackCreateWithoutAlbumInput } from "../inputs/TrackCreateWithoutAlbumInput";
import { TrackScalarWhereInput } from "../inputs/TrackScalarWhereInput";
import { TrackUpdateManyWithWhereWithoutAlbumInput } from "../inputs/TrackUpdateManyWithWhereWithoutAlbumInput";
import { TrackUpdateWithWhereUniqueWithoutAlbumInput } from "../inputs/TrackUpdateWithWhereUniqueWithoutAlbumInput";
import { TrackUpsertWithWhereUniqueWithoutAlbumInput } from "../inputs/TrackUpsertWithWhereUniqueWithoutAlbumInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackUpdateManyWithoutAlbumNestedInput", {
  isAbstract: true
})
export class TrackUpdateManyWithoutAlbumNestedInput {
  @TypeGraphQL.Field(_type => [TrackCreateWithoutAlbumInput], {
    nullable: true
  })
  create?: TrackCreateWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackCreateOrConnectWithoutAlbumInput], {
    nullable: true
  })
  connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackUpsertWithWhereUniqueWithoutAlbumInput], {
    nullable: true
  })
  upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackCreateManyAlbumInputEnvelope, {
    nullable: true
  })
  createMany?: TrackCreateManyAlbumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereUniqueInput], {
    nullable: true
  })
  set?: TrackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TrackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereUniqueInput], {
    nullable: true
  })
  delete?: TrackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereUniqueInput], {
    nullable: true
  })
  connect?: TrackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackUpdateWithWhereUniqueWithoutAlbumInput], {
    nullable: true
  })
  update?: TrackUpdateWithWhereUniqueWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackUpdateManyWithWhereWithoutAlbumInput], {
    nullable: true
  })
  updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrackScalarWhereInput[] | undefined;
}
