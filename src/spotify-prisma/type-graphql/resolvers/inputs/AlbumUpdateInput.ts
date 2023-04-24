import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput } from "../inputs/AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput";
import { AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput } from "../inputs/AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TrackUpdateManyWithoutAlbumNestedInput } from "../inputs/TrackUpdateManyWithoutAlbumNestedInput";

@TypeGraphQL.InputType("AlbumUpdateInput", {
  isAbstract: true
})
export class AlbumUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  uid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  albumType?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  totalTracks?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  releaseDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  releaseDatePrecision?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  albumGroup?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  copyrights?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput, {
    nullable: true
  })
  availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput, {
    nullable: true
  })
  Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpdateManyWithoutAlbumNestedInput, {
    nullable: true
  })
  Tracks?: TrackUpdateManyWithoutAlbumNestedInput | undefined;
}
