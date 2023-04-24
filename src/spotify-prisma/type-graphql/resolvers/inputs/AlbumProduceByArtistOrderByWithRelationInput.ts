import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumOrderByWithRelationInput } from "../inputs/AlbumOrderByWithRelationInput";
import { ArtistOrderByWithRelationInput } from "../inputs/ArtistOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlbumProduceByArtistOrderByWithRelationInput", {
  isAbstract: true
})
export class AlbumProduceByArtistOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albumId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlbumOrderByWithRelationInput, {
    nullable: true
  })
  Album?: AlbumOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOrderByWithRelationInput, {
    nullable: true
  })
  Artist?: ArtistOrderByWithRelationInput | undefined;
}
