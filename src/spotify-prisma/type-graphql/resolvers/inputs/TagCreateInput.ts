import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateNestedManyWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateNestedManyWithoutTagInput";
import { ArtistInGenresCreateNestedManyWithoutTagInput } from "../inputs/ArtistInGenresCreateNestedManyWithoutTagInput";
import { TracksAvailableMarketCreateNestedManyWithoutTagInput } from "../inputs/TracksAvailableMarketCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateInput", {
  isAbstract: true
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  AlbumAvailableMarket?: AlbumAvailableMarketCreateNestedManyWithoutTagInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  TracksAvailableMarket?: TracksAvailableMarketCreateNestedManyWithoutTagInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  ArtistInGenres?: ArtistInGenresCreateNestedManyWithoutTagInput | undefined;
}
