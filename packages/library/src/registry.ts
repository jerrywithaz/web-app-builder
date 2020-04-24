const registry: Record<string, React.ComponentType> = {};

class Registry {

    public registerComponent(name: string, component: React.ComponentType) {
        registry[name] = component;
    }

    public getComponent(name: string): React.ComponentType | null {
        return registry[name] || null;
    }
    
}

export default new Registry();