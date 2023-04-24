import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistUpdateManyWithoutArtistNestedInput } from "../inputs/AlbumProduceByArtistUpdateManyWithoutArtistNestedInput";
import { ArtistInGenresUpdateManyWithoutArtistNestedInput } from "../inputs/ArtistInGenresUpdateManyWithoutArtistNestedInput";
import { ArtistOnFollowingUpdateManyWithoutArtistNestedInput } from "../inputs/ArtistOnFollowingUpdateManyWithoutArtistNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TrackProduceByArtistUpdateManyWithoutArtistsNestedInput } from "../inputs/TrackProduceByArtistUpdateManyWithoutArtistsNestedInput";

@TypeGraphQL.InputType("ArtistUpdateInput", {
  isAbstract: true
})
export class ArtistUpdateInput {
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

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  popularity?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateManyWithoutArtistNestedInput, {
    nullable: true
  })
  Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateManyWithoutArtistsNestedInput, {
    nullable: true
  })
  TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateManyWithoutArtistNestedInput, {
    nullable: true
  })
  AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingUpdateManyWithoutArtistNestedInput, {
    nullable: true
  })
  Followers?: ArtistOnFollowingUpdateManyWithoutArtistNestedInput | undefined;
}
