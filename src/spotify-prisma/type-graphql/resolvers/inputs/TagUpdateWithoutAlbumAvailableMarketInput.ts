import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresUpdateManyWithoutTagNestedInput } from "../inputs/ArtistInGenresUpdateManyWithoutTagNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TracksAvailableMarketUpdateManyWithoutTagNestedInput } from "../inputs/TracksAvailableMarketUpdateManyWithoutTagNestedInput";

@TypeGraphQL.InputType("TagUpdateWithoutAlbumAvailableMarketInput", {
  isAbstract: true
})
export class TagUpdateWithoutAlbumAvailableMarketInput {
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

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  TracksAvailableMarket?: TracksAvailableMarketUpdateManyWithoutTagNestedInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresUpdateManyWithoutTagNestedInput, {
    nullable: true
  })
  ArtistInGenres?: ArtistInGenresUpdateManyWithoutTagNestedInput | undefined;
}
