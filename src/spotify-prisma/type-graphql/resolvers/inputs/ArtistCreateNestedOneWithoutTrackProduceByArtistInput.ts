import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateOrConnectWithoutTrackProduceByArtistInput";
import { ArtistCreateWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateWithoutTrackProduceByArtistInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateNestedOneWithoutTrackProduceByArtistInput", {
  isAbstract: true
})
export class ArtistCreateNestedOneWithoutTrackProduceByArtistInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutTrackProduceByArtistInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutTrackProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutTrackProduceByArtistInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutTrackProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;
}
