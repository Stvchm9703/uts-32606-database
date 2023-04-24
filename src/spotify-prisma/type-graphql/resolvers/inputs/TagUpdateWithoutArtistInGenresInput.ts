import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketUpdateManyWithoutTagNestedInput } from "../inputs/AlbumAvailableMarketUpdateManyWithoutTagNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TracksAvailableMarketUpdateManyWithoutTagNestedInput } from "../inputs/TracksAvailableMarketUpdateManyWithoutTagNestedInput";

@TypeGraphQL.InputType("TagUpdateWithoutArtistInGenresInput", {
  isAbstract: true
})
export class TagUpdateWithoutArtistInGenresInput {
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

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  TracksAvailableMarket?: TracksAvailableMarketUpdateManyWithoutTagNestedInput | undefined;
}
