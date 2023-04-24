import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateManyArtistInputEnvelope } from "../inputs/ArtistInGenresCreateManyArtistInputEnvelope";
import { ArtistInGenresCreateOrConnectWithoutArtistInput } from "../inputs/ArtistInGenresCreateOrConnectWithoutArtistInput";
import { ArtistInGenresCreateWithoutArtistInput } from "../inputs/ArtistInGenresCreateWithoutArtistInput";
import { ArtistInGenresWhereUniqueInput } from "../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInGenresCreateNestedManyWithoutArtistInput", {
  isAbstract: true
})
export class ArtistInGenresCreateNestedManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateWithoutArtistInput], {
    nullable: true
  })
  create?: ArtistInGenresCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInGenresCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInGenresCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistInGenresWhereUniqueInput[] | undefined;
}
