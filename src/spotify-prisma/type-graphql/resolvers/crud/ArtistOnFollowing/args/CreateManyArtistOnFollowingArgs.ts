import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOnFollowingCreateManyInput } from "../../../inputs/ArtistOnFollowingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArtistOnFollowingArgs {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateManyInput], {
    nullable: false
  })
  data!: ArtistOnFollowingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
