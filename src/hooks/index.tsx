import React from 'react';
import {Tabs} from './tabsContext';

const AppProvider: React.FC = ({children}) =>{
    return(
        <Tabs>
            {children}
        </Tabs>
    );
};

export default AppProvider;