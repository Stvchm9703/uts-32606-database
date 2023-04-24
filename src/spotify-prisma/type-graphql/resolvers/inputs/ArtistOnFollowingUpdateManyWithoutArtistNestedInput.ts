import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateManyArtistInputEnvelope } from "../inputs/ArtistOnFollowingCreateManyArtistInputEnvelope";
import { ArtistOnFollowingCreateOrConnectWithoutArtistInput } from "../inputs/ArtistOnFollowingCreateOrConnectWithoutArtistInput";
import { ArtistOnFollowingCreateWithoutArtistInput } from "../inputs/ArtistOnFollowingCreateWithoutArtistInput";
import { ArtistOnFollowingScalarWhereInput } from "../inputs/ArtistOnFollowingScalarWhereInput";
import { ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput } from "../inputs/ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput";
import { ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput } from "../inputs/ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput";
import { ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput } from "../inputs/ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateManyWithoutArtistNestedInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateManyWithoutArtistNestedInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateWithoutArtistInput], {
    nullable: true
  })
  create?: ArtistOnFollowingCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: ArtistOnFollowingCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  upsert?: ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistOnFollowingCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereUniqueInput], {
    nullable: true
  })
  set?: ArtistOnFollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ArtistOnFollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereUniqueInput], {
    nullable: true
  })
  delete?: ArtistOnFollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistOnFollowingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  update?: ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput], {
    nullable: true
  })
  updateMany?: ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistOnFollowingScalarWhereInput[] | undefined;
}
