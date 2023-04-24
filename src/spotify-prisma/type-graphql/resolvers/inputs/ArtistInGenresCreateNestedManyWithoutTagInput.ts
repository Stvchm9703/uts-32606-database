import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateManyTagInputEnvelope } from "../inputs/ArtistInGenresCreateManyTagInputEnvelope";
import { ArtistInGenresCreateOrConnectWithoutTagInput } from "../inputs/ArtistInGenresCreateOrConnectWithoutTagInput";
import { ArtistInGenresCreateWithoutTagInput } from "../inputs/ArtistInGenresCreateWithoutTagInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class ArtistInGenresCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateWithoutTagInput], {
    nullable: true
  })
  create?: ArtistInGenresCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInGenresCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInGenresCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistInGenresWhereUniqueInput[] | undefined;
}
