import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresCreateManyInput } from "../../../inputs/ArtistInGenresCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArtistInGenresArgs {
  @TypeGraphQL.Field(_type => [ArtistInGenresCreateManyInput], {
    nullable: false
  })
  data!: ArtistInGenresCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
