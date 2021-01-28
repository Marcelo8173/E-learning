import React, { useContext, createContext, useCallback, useState } from 'react';

export interface TabsData{
    id: number;
    name: string;
}

interface TabsContextData{
    addSelectTab(item: TabsData): void;
    tabSelected: TabsData;
}


const TabsContext = createContext<TabsContextData>({} as TabsContextData);

export const Tabs: React.FC = ({children}) => {
    
    const [tabSelected, setTabSelected] = useState<TabsData>({
        id: 1,
        name: 'home'
    });

    const addSelectTab = useCallback((item:TabsData) => {
        setTabSelected(item)
    }, []);

    return (
        <TabsContext.Provider value={{addSelectTab,tabSelected}}>
            {children}
        </TabsContext.Provider>
    )
}

export function useTabs(): TabsContextData{
    const context = useContext(TabsContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}