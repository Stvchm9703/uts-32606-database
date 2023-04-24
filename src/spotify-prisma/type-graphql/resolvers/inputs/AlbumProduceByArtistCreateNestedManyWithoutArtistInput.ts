import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateManyArtistInputEnvelope } from "../inputs/AlbumProduceByArtistCreateManyArtistInputEnvelope";
import { AlbumProduceByArtistCreateOrConnectWithoutArtistInput } from "../inputs/AlbumProduceByArtistCreateOrConnectWithoutArtistInput";
import { AlbumProduceByArtistCreateWithoutArtistInput } from "../inputs/AlbumProduceByArtistCreateWithoutArtistInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateNestedManyWithoutArtistInput", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateNestedManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateWithoutArtistInput], {
    nullable: true
  })
  create?: AlbumProduceByArtistCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: AlbumProduceByArtistCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumProduceByArtistCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: AlbumProduceByArtistWhereUniqueInput[] | undefined;
}
