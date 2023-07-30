import React from "react";


interface IProps {
    children: React.ReactNode
}


export const ChestContext = React.createContext({
    totalChest: 0,
    openedChest: {
        total: 0,
        position: []
    },
    updateOpenedChest: () => null
});

    function ChestProvider(props: IProps) {
        const [chestState, updateChestState] = React.useState({
            totalChest: 2,
            openedChest: {
                total: 0,
                position: []
            },
            updateOpenedChest: () => {
                console.log('chest')
            }
        });

        return(
            <ChestContext.Provider value={chestState}>{props.children}</ChestContext.Provider> 
        )
    }

    export default ChestProvider;
