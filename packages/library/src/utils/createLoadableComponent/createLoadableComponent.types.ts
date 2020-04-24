import { ComponentPropsWithRef, ComponentType, ReactNode } from "react";

export type LoadableImportFunc<ComponentProps> = () => Promise<{ default: React.ComponentType<ComponentProps> }>;

export type LoadableFallback = NonNullable<ReactNode> | null;

export type LoadableComponentProps<ComponentProps> = ComponentPropsWithRef<ComponentType<ComponentProps>> & ComponentProps;

export type CreateLoadableComponentOptions<ComponentProps> = {
    importFunc: LoadableImportFunc<ComponentProps>, 
    fallback?: LoadableFallback
}