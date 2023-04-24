import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateOrConnectWithoutTracksInput } from "../inputs/AlbumCreateOrConnectWithoutTracksInput";
import { AlbumCreateWithoutTracksInput } from "../inputs/AlbumCreateWithoutTracksInput";
import { AlbumUpdateWithoutTracksInput } from "../inputs/AlbumUpdateWithoutTracksInput";
import { AlbumUpsertWithoutTracksInput } from "../inputs/AlbumUpsertWithoutTracksInput";
import { AlbumWhereUniqueInput } from "../inputs/AlbumWhereUniqueInput";

@TypeGraphQL.InputType("AlbumUpdateOneWithoutTracksNestedInput", {
  isAbstract: true
})
export class AlbumUpdateOneWithoutTracksNestedInput {
  @TypeGraphQL.Field(_type => AlbumCreateWithoutTracksInput, {
    nullable: true
  })
  create?: AlbumCreateWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => AlbumCreateOrConnectWithoutTracksInput, {
    nullable: true
  })
  connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => AlbumUpsertWithoutTracksInput, {
    nullable: true
  })
  upsert?: AlbumUpsertWithoutTracksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AlbumWhereUniqueInput, {
    nullable: true
  })
  connect?: AlbumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AlbumUpdateWithoutTracksInput, {
    nullable: true
  })
  update?: AlbumUpdateWithoutTracksInput | undefined;
}
