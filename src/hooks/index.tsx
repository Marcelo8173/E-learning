import React from 'react';
import { Following } from './followContext';
import {Tabs} from './tabsContext';

const AppProvider: React.FC = ({children}) =>{
    return (
        <Following>
            <Tabs>
                {children}
            </Tabs>
        </Following>
    );
};

export default AppProvider;