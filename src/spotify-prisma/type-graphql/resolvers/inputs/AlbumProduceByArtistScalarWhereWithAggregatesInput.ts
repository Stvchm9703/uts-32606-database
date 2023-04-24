import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("AlbumProduceByArtistScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AlbumProduceByArtistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AlbumProduceByArtistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AlbumProduceByArtistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AlbumProduceByArtistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  albumId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  artistId?: IntWithAggregatesFilter | undefined;
}
