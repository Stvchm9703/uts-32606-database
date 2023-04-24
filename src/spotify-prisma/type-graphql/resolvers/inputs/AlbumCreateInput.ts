import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateNestedManyWithoutAlbumInput } from "../inputs/AlbumAvailableMarketCreateNestedManyWithoutAlbumInput";
import { AlbumProduceByArtistCreateNestedManyWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateNestedManyWithoutAlbumInput";
import { TrackCreateNestedManyWithoutAlbumInput } from "../inputs/TrackCreateNestedManyWithoutAlbumInput";

@TypeGraphQL.InputType("AlbumCreateInput", {
  isAbstract: true
})
export class AlbumCreateInput {
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
  albumType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalTracks!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  releaseDatePrecision!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  albumGroup!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyrights?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl?: string | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateNestedManyWithoutAlbumInput, {
    nullable: true
  })
  availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateNestedManyWithoutAlbumInput, {
    nullable: true
  })
  Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput | undefined;

  @TypeGraphQL.Field(_type => TrackCreateNestedManyWithoutAlbumInput, {
    nullable: true
  })
  Tracks?: TrackCreateNestedManyWithoutAlbumInput | undefined;
}
