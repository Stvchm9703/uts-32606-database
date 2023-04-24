import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("AlbumProduceByArtistScalarWhereInput", {
  isAbstract: true
})
export class AlbumProduceByArtistScalarWhereInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereInput], {
    nullable: true
  })
  AND?: AlbumProduceByArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereInput], {
    nullable: true
  })
  OR?: AlbumProduceByArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereInput], {
    nullable: true
  })
  NOT?: AlbumProduceByArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  albumId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;
}
