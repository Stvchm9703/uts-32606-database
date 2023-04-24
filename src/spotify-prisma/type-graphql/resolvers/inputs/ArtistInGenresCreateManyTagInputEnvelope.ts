import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateManyTagInput } from "../inputs/ArtistInGenresCreateManyTagInput";

@TypeGraphQL.InputType("ArtistInGenresCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class ArtistInGenresCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateManyTagInput], {
    nullable: false
  })
  data!: ArtistInGenresCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
