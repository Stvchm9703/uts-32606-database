import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateOrConnectWithoutTracksInput } from "../inputs/AlbumCreateOrConnectWithoutTracksInput";
import { AlbumCreateWithoutTracksInput } from "../inputs/AlbumCreateWithoutTracksInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumCreateNestedOneWithoutTracksInput", {
  isAbstract: true
})
export class AlbumCreateNestedOneWithoutTracksInput {
  @TypeGraphQL.Field(_type => AlbumCreateWithoutTracksInput, {
    nullable: true
  })
  create?: AlbumCreateWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => AlbumCreateOrConnectWithoutTracksInput, {
    nullable: true
  })
  connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  connect?: AlbumWhereUniqueInput | undefined;
}
