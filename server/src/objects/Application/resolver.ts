import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation,
    Float
} from 'type-graphql';
import { ApplicationType } from './types';
import { getApplication, getApplications } from './apis';
import { GetApplicationArgs } from './args';

@Resolver(() => ApplicationType)
class ApplicationResolver {

    @Query(() => ApplicationType, { nullable: true })
    async application(
        @Args() { id }: GetApplicationArgs
    ): Promise<ApplicationType | null> {
        return await getApplication(id) || null;
    }

    @Query(() => [ApplicationType])
    async applications(
    ): Promise<ApplicationType[]> {
        return await getApplications();
    }

}

export default ApplicationResolver;