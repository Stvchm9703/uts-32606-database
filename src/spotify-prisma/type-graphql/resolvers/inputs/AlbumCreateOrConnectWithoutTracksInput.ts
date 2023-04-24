import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateWithoutTracksInput } from "../inputs/AlbumCreateWithoutTracksInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumCreateOrConnectWithoutTracksInput", {
  isAbstract: true
})
export class AlbumCreateOrConnectWithoutTracksInput {
  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumCreateWithoutTracksInput, {
    nullable: false
  })
  create!: AlbumCreateWithoutTracksInput;
}
