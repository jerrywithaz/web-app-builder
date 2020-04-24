export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  application?: Maybe<ApplicationType>;
  applications: Array<ApplicationType>;
};


export type QueryApplicationArgs = {
  id: Scalars['ID'];
};

/** The Application Object Type. */
export type ApplicationType = {
   __typename?: 'ApplicationType';
  id: Scalars['ID'];
  name: Scalars['String'];
  routes: Array<ApplicationRouteType>;
};

/** The Application Route Object Type. */
export type ApplicationRouteType = {
   __typename?: 'ApplicationRouteType';
  id: Scalars['ID'];
  title: Scalars['String'];
  path: Scalars['String'];
  secure: Scalars['Boolean'];
  exact: Scalars['Boolean'];
  routes: Array<ApplicationRouteType>;
  component: Scalars['String'];
};

export type ApplicationRouteInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  path: Scalars['String'];
  secure: Scalars['Boolean'];
  exact: Scalars['Boolean'];
  routes: Array<ApplicationRouteInput>;
  component: Scalars['String'];
};

export type ApplicationInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  routes: Array<ApplicationRouteInput>;
};

