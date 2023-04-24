import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateManyTagInput } from "../inputs/AlbumAvailableMarketCreateManyTagInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateManyTagInput], {
    nullable: false
  })
  data!: AlbumAvailableMarketCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
