import React from "react-dom"
import CanvasProvider from "../contexts/canvas"
import Debugger from "./Debugger"
import Board from "./Board"
import ChestProvider from "../contexts/chest/chest"


export function Game() {
    return (
        <CanvasProvider>
            <ChestProvider>
                <Debugger />
                <Board />
            </ChestProvider>
        </CanvasProvider>
    )
}