import React, { lazy, Suspense, ComponentType } from 'react';
import {
  LoadableComponentProps,
  CreateLoadableComponentOptions,
} from './createLoadableComponent.types';

function createLoadableComponent<ComponentProps = {}>({
  importFunc,
  fallback = { fallback: null },
}: CreateLoadableComponentOptions<ComponentProps>) {
  const LazyComponent = lazy<ComponentType<ComponentProps>>(importFunc);

  const LoadableComponent = (props: LoadableComponentProps<ComponentProps>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return LoadableComponent;
}

export default createLoadableComponent;
