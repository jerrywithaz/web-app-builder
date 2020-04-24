import { ObjectType, Field, ID, InputType, createUnionType } from 'type-graphql';

@ObjectType({description: "The Application Route Object Type."})
@InputType("ApplicationRouteInput")
export class ApplicationRouteType {

    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    path: string;

    @Field(() => Boolean)
    secure: boolean;

    @Field(() => Boolean)
    exact: boolean;

    @Field(() => [ApplicationRouteType])
    routes?: ApplicationRouteType[];
    
    @Field()
    component: string;

}

@ObjectType({description: "The Application Object Type."})
@InputType("ApplicationInput")
export class ApplicationType {

    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field(() => [ApplicationRouteType])
    routes: ApplicationRouteType[]
}