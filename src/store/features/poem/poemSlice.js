import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    poems: []
}

const poemSlice = createSlice({
    name: "poem",
    initialState,
    reducers: {
        initPoems: (state, action) => {
            state.poems = action.payload;
        },
        clearPoems: (state) => {
            state.poems = [];
        },
        addPoem: (state, action) => {
            state.poems.push(action.payload);
        },
        removePoem: (state, action) => {
            state.poems = state.poems.filter(poem => poem.id !== action.payload.id);
        },
        updatePoem: (state, action) => {
            state.poems = state.poems.map(poem => {
                if (poem.id === action.payload.id) {
                    poem = { ...poem, text : action.payload.text };
                }
            })
        },
        likePoem: (state, action) => {
            state.poems = state.poems.map(poem => {
                if (poem.id === action.payload.id) {
                    poem = { ...poem, like : action.payload.like };
                }
            })
        },
        addComment: (state, action) => {
            state.poems = state.poems.map(poem => {
                if (poem.id === action.payload.id) {
                    poem = { ...poem, comments : [...poem.comments, action.payload.comment] };
                }
            })
        },
        removeComment: (state, action) => {
            state.poems = state.poems.map(poem => {
                if (poem.id === action.payload.id) {
                    poem = { ...poem, comments : poem.comments.filter(comment => comment.id !== action.payload.commentId) };
                }
            })
        },
    }
});

export const { initPoems, clearPoems, addPoem, removePoem, updatePoem, likePoem, addComment, removeComment } = poemSlice.actions;

export default poemSlice.reducer;