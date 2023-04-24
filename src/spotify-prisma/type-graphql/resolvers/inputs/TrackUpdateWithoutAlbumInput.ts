import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TrackProduceByArtistUpdateManyWithoutTrackNestedInput } from "../inputs/TrackProduceByArtistUpdateManyWithoutTrackNestedInput";
import { TracksAvailableMarketUpdateManyWithoutTrackNestedInput } from "../inputs/TracksAvailableMarketUpdateManyWithoutTrackNestedInput";
import { TracksOnPlaylistUpdateManyWithoutTrackNestedInput } from "../inputs/TracksOnPlaylistUpdateManyWithoutTrackNestedInput";

@TypeGraphQL.InputType("TrackUpdateWithoutAlbumInput", {
  isAbstract: true
})
export class TrackUpdateWithoutAlbumInput {
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
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  durationMs?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  explicit?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  popularity?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  previewUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  trackNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isLocal?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateManyWithoutTrackNestedInput, {
    nullable: true
  })
  availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateManyWithoutTrackNestedInput, {
    nullable: true
  })
  Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateManyWithoutTrackNestedInput, {
    nullable: true
  })
  InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput | undefined;
}
