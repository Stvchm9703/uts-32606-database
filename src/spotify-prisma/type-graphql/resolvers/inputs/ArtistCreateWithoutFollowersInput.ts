import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateNestedManyWithoutArtistInput } from "../inputs/AlbumProduceByArtistCreateNestedManyWithoutArtistInput";
import { ArtistInGenresCreateNestedManyWithoutArtistInput } from "../inputs/ArtistInGenresCreateNestedManyWithoutArtistInput";
import { TrackProduceByArtistCreateNestedManyWithoutArtistsInput } from "../inputs/TrackProduceByArtistCreateNestedManyWithoutArtistsInput";

@TypeGraphQL.InputType("ArtistCreateWithoutFollowersInput", {
  isAbstract: true
})
export class ArtistCreateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularity?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl?: string | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateNestedManyWithoutArtistInput, {
    nullable: true
  })
  Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateNestedManyWithoutArtistsInput, {
    nullable: true
  })
  TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateNestedManyWithoutArtistInput, {
    nullable: true
  })
  AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput | undefined;
}
