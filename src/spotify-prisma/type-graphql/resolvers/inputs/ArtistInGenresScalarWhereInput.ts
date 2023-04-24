import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ArtistInGenresScalarWhereInput", {
  isAbstract: true
})
export class ArtistInGenresScalarWhereInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereInput], {
    nullable: true
  })
  AND?: ArtistInGenresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereInput], {
    nullable: true
  })
  OR?: ArtistInGenresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresScalarWhereInput], {
    nullable: true
  })
  NOT?: ArtistInGenresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;
}
