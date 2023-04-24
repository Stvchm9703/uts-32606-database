import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresCreateManyArtistInput } from "../inputs/ArtistInGenresCreateManyArtistInput";

@TypeGraphQL.InputType("ArtistInGenresCreateManyArtistInputEnvelope", {
  isAbstract: true
})
export class ArtistInGenresCreateManyArtistInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateManyArtistInput], {
    nullable: false
  })
  data!: ArtistInGenresCreateManyArtistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
