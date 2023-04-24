import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PlaylistMinAggregate", {
  isAbstract: true
})
export class PlaylistMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uid!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  collaborative!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  public!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  snapshotId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  primaryColor!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tracksIds!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ownerId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagesId!: string | null;
}
