import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CategoryCreateInput", {
  isAbstract: true
})
export class CategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hashId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;
}
