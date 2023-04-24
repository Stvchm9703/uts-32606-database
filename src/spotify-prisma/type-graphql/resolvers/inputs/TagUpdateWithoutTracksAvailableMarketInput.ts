import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketUpdateManyWithoutTagNestedInput } from "../inputs/AlbumAvailableMarketUpdateManyWithoutTagNestedInput";
import { ArtistInGenresUpdateManyWithoutTagNestedInput } from "../inputs/ArtistInGenresUpdateManyWithoutTagNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TagUpdateWithoutTracksAvailableMarketInput", {
  isAbstract: true
})
export class TagUpdateWithoutTracksAvailableMarketInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  AlbumAvailableMarket?: AlbumAvailableMarketUpdateManyWithoutTagNestedInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  ArtistInGenres?: ArtistInGenresUpdateManyWithoutTagNestedInput | undefined;
}
