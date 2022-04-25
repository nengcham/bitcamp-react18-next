import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state, action) => {
            alert('리듀서 내부로 들어온 글제목: '+JSON.stringify(action))
            // const board = {id: new Date(), action}
            // state.push(board)
        }
    }
})

export const { addBoard } = boardSlice.actions
export default boardSlice.reducer