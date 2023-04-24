import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateManyArtistInputEnvelope } from "../inputs/ArtistOnFollowingCreateManyArtistInputEnvelope";
import { ArtistOnFollowingCreateOrConnectWithoutArtistInput } from "../inputs/ArtistOnFollowingCreateOrConnectWithoutArtistInput";
import { ArtistOnFollowingCreateWithoutArtistInput } from "../inputs/ArtistOnFollowingCreateWithoutArtistInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateNestedManyWithoutArtistInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateNestedManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateWithoutArtistInput], {
    nullable: true
  })
  create?: ArtistOnFollowingCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: ArtistOnFollowingCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistOnFollowingCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistOnFollowingWhereUniqueInput[] | undefined;
}
