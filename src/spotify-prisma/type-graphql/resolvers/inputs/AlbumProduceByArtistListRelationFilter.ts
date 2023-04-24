import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistWhereInput } from "../inputs/AlbumProduceByArtistWhereInput";

@TypeGraphQL.InputType("AlbumProduceByArtistListRelationFilter", {
  isAbstract: true
})
export class AlbumProduceByArtistListRelationFilter {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  every?: AlbumProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  some?: AlbumProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  none?: AlbumProduceByArtistWhereInput | undefined;
}
