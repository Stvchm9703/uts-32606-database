import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateOrConnectWithoutTrackProduceByArtistInput";
import { ArtistCreateWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateWithoutTrackProduceByArtistInput";
import { ArtistUpdateWithoutTrackProduceByArtistInput } from "../inputs/ArtistUpdateWithoutTrackProduceByArtistInput";
import { ArtistUpsertWithoutTrackProduceByArtistInput } from "../inputs/ArtistUpsertWithoutTrackProduceByArtistInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput", {
  isAbstract: true
})
export class ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutTrackProduceByArtistInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutTrackProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutTrackProduceByArtistInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutTrackProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpsertWithoutTrackProduceByArtistInput, {
    nullable: true
  })
  upsert?: ArtistUpsertWithoutTrackProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateWithoutTrackProduceByArtistInput, {
    nullable: true
  })
  update?: ArtistUpdateWithoutTrackProduceByArtistInput | undefined;
}
