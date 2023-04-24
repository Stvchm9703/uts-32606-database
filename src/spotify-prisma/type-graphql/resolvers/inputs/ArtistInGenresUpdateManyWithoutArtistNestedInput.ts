import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateManyArtistInputEnvelope } from "../inputs/ArtistInGenresCreateManyArtistInputEnvelope";
import { ArtistInGenresCreateOrConnectWithoutArtistInput } from "../inputs/ArtistInGenresCreateOrConnectWithoutArtistInput";
import { ArtistInGenresCreateWithoutArtistInput } from "../inputs/ArtistInGenresCreateWithoutArtistInput";
import { ArtistInGenresScalarWhereInput } from "../inputs/ArtistInGenresScalarWhereInput";
import { ArtistInGenresUpdateManyWithWhereWithoutArtistInput } from "../inputs/ArtistInGenresUpdateManyWithWhereWithoutArtistInput";
import { ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput } from "../inputs/ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput";
import { ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput } from "../inputs/ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresUpdateManyWithoutArtistNestedInput", {
  isAbstract: true
})
export class ArtistInGenresUpdateManyWithoutArtistNestedInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateWithoutArtistInput], {
    nullable: true
  })
  create?: ArtistInGenresCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInGenresCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  upsert?: ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInGenresCreateManyArtistInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  update?: ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresUpdateManyWithWhereWithoutArtistInput], {
    nullable: true
  })
  updateMany?: ArtistInGenresUpdateManyWithWhereWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistInGenresScalarWhereInput[] | undefined;
}
