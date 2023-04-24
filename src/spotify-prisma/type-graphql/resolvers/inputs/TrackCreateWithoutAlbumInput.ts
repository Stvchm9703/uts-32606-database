import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateNestedManyWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateNestedManyWithoutTrackInput";
import { TracksAvailableMarketCreateNestedManyWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateNestedManyWithoutTrackInput";
import { TracksOnPlaylistCreateNestedManyWithoutTrackInput } from "../inputs/TracksOnPlaylistCreateNestedManyWithoutTrackInput";

@TypeGraphQL.InputType("TrackCreateWithoutAlbumInput", {
  isAbstract: true
})
export class TrackCreateWithoutAlbumInput {
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
    nullable: false
  })
  discNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  durationMs!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicit!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularity?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previewUrl?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackNumber!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isLocal!: boolean;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateNestedManyWithoutTrackInput, {
    nullable: true
  })
  availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateNestedManyWithoutTrackInput, {
    nullable: true
  })
  Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateNestedManyWithoutTrackInput, {
    nullable: true
  })
  InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput | undefined;
}