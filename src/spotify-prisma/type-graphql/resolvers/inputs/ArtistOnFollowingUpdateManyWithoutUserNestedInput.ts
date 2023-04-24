import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateManyUserInputEnvelope } from "../inputs/ArtistOnFollowingCreateManyUserInputEnvelope";
import { ArtistOnFollowingCreateOrConnectWithoutUserInput } from "../inputs/ArtistOnFollowingCreateOrConnectWithoutUserInput";
import { ArtistOnFollowingCreateWithoutUserInput } from "../inputs/ArtistOnFollowingCreateWithoutUserInput";
import { ArtistOnFollowingScalarWhereInput } from "../inputs/ArtistOnFollowingScalarWhereInput";
import { ArtistOnFollowingUpdateManyWithWhereWithoutUserInput } from "../inputs/ArtistOnFollowingUpdateManyWithWhereWithoutUserInput";
import { ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput";
import { ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ArtistOnFollowingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateWithoutUserInput], {
    nullable: true
  })
  create?: ArtistOnFollowingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ArtistOnFollowingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistOnFollowingCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ArtistOnFollowingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistOnFollowingScalarWhereInput[] | undefined;
}
