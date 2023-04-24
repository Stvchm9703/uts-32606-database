import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateManyTagInputEnvelope } from "../inputs/ArtistInGenresCreateManyTagInputEnvelope";
import { ArtistInGenresCreateOrConnectWithoutTagInput } from "../inputs/ArtistInGenresCreateOrConnectWithoutTagInput";
import { ArtistInGenresCreateWithoutTagInput } from "../inputs/ArtistInGenresCreateWithoutTagInput";
import { ArtistInGenresScalarWhereInput } from "../inputs/ArtistInGenresScalarWhereInput";
import { ArtistInGenresUpdateManyWithWhereWithoutTagInput } from "../inputs/ArtistInGenresUpdateManyWithWhereWithoutTagInput";
import { ArtistInGenresUpdateWithWhereUniqueWithoutTagInput } from "../inputs/ArtistInGenresUpdateWithWhereUniqueWithoutTagInput";
import { ArtistInGenresUpsertWithWhereUniqueWithoutTagInput } from "../inputs/ArtistInGenresUpsertWithWhereUniqueWithoutTagInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateManyWithoutTagNestedInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateWithoutTagInput], {
    nullable: true
  })
  create?: ArtistInGenresCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInGenresCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: ArtistInGenresUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInGenresCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereUniqueInput], {
    nullable: true
  })
  set?: ArtistInGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ArtistInGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereUniqueInput], {
    nullable: true
  })
  delete?: ArtistInGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistInGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: ArtistInGenresUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: ArtistInGenresUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistInGenresScalarWhereInput[] | undefined;
}
