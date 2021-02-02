import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: [],
};

export const fetchChapters = createAsyncThunk("chapters/fetchAll", async () => {
  const response = await axios({
    url: `https://chapters-7962.restdb.io/rest/chapters?fetchchildren=true&sort=sort`,
    method: "GET",
    headers: { "x-apikey": "6011eda11346a1524ff12eca" },
  });

  return response.data;
});

export const addChapter = createAsyncThunk(
  "chapters/addChapter",
  async (payload) => {
    const response = await axios({
      url: `https://chapters-7962.restdb.io/rest/chapters`,
      method: "POST",
      data: payload,
      headers: { "x-apikey": "6011eda11346a1524ff12eca" },
    });
    return response.data;
  }
);

export const editChapter = createAsyncThunk(
  "chapters/editChapter",
  async (arg) => {
    const response = await axios({
      url: `https://chapters-7962.restdb.io/rest/chapters/${arg.chapterId}`,
      method: "PATCH",
      data: arg.payload,
      headers: { "x-apikey": "6011eda11346a1524ff12eca" },
    });
    return response.data;
  }
);

export const deleteChapter = createAsyncThunk(
  "chapters/deleteChapter",
  async (chapterId) => {
    const response = await axios({
      url: `https://chapters-7962.restdb.io/rest/chapters/${chapterId}`,
      method: "DELETE",
      headers: { "x-apikey": "6011eda11346a1524ff12eca" },
    });
    return response.data;
  }
);

export const addSubsection = createAsyncThunk(
  "chapters/addSubsection",
  async (arg) => {
    const response = await axios({
      url: `https://chapters-7962.restdb.io/rest/chapters/${arg.chapterId}/subsections`,
      method: "POST",
      data: arg.payload,
      headers: { "x-apikey": "6011eda11346a1524ff12eca" },
    });
    return response.data;
  }
);

export const editSubsection = createAsyncThunk(
  "chapters/editSubsection",
  async (arg) => {
    const response = await axios({
      url: `https://chapters-7962.restdb.io/rest/subsections/${arg.subsectionId}`,
      method: "PATCH",
      data: arg.payload,
      headers: { "x-apikey": "6011eda11346a1524ff12eca" },
    });
    return response.data;
  }
);

export const deleteSubsection = createAsyncThunk(
  "chapters/deleteSubsection",
  async (subsectionId) => {
    const response = await axios({
      url: `https://chapters-7962.restdb.io/rest/subsections/${subsectionId}`,
      method: "DELETE",
      headers: { "x-apikey": "6011eda11346a1524ff12eca" },
    });
    return response.data;
  }
);

export const chapterSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    toggleChapter(state, action) {
      return {
        ...state,
        entries: state.entries.map((chapter) =>
          chapter._id === action.payload.chapterId
            ? {
                ...chapter,
                ready: !chapter.ready,
                subsections: chapter.subsections.map((subsection) => {
                  return {
                    ...subsection,
                    ready: !chapter.ready,
                  };
                }),
              }
            : chapter
        ),
      };
    },
    toggleSubsection(state, action) {
      const stateSub = {
        ...state,
        entries: state.entries.map((chapter) =>
          chapter._id === action.payload.chapterId
            ? {
                ...chapter,
                subsections: chapter.subsections.map((subsection) => {
                  return subsection._id === action.payload.subsectionId
                    ? { ...subsection, ready: !subsection.ready }
                    : subsection;
                }),
              }
            : chapter
        ),
      };

      const countSubsections = stateSub.entries.find((e) => {
        return e._id === action.payload.chapterId;
      }).subsections.length;

      const countReadySubsections = stateSub.entries
        .find((e) => {
          return e._id === action.payload.chapterId;
        })
        .subsections.filter((s) => s.ready === true).length;

      const finalState = {
        ...state,
        entries: stateSub.entries.map((chapter) => {
          if (chapter._id === action.payload.chapterId) {
            if (countSubsections === countReadySubsections) {
              return { ...chapter, ready: true };
            } else {
              return { ...chapter, ready: false };
            }
          }
          return chapter;
        }),
      };

      return finalState;
    },
  },
  extraReducers: {
    [deleteSubsection.pending]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [deleteSubsection.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: false,
      entries: state.entries.map((chapter) => {
        return {
          ...chapter,
          subsections: chapter.subsections.filter(
            (subsection) => subsection._id !== action.payload.result[0]
          ),
        };
      }),
    }),

    [deleteSubsection.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      // detailed message is truncated in payload,
      // action.error.response.data.message not working anymore
      error: action.error.message,
    }),

    [editSubsection.pending]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [editSubsection.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: false,
      entries: state.entries.map((chapter) => {
        if (chapter._id !== action.payload._parent_id) return chapter;
        return {
          ...chapter,
          subsections: chapter.subsections.map((subsection) => {
            if (subsection._id !== action.payload._id) return subsection;
            return {
              ...subsection,
              title: action.payload.title,
            };
          }),
        };
      }),
    }),

    [editSubsection.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      // detailed message is truncated in payload,
      // action.error.response.data.message not working anymore
      error: action.error.message,
    }),

    [addSubsection.pending]: (state, action) => ({ ...state, isLoading: true }),

    [addSubsection.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: false,
      entries: state.entries.map((chapter) =>
        chapter._id === action.payload._parent_id
          ? {
              ...chapter,
              subsections: chapter.subsections.concat(action.payload),
              ready: false,
            }
          : chapter
      ),
    }),

    [addSubsection.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      // detailed message is truncated in payload,
      // action.error.response.data.message not working anymore
      error: action.error.message,
    }),

    [deleteChapter.pending]: (state, action) => ({ ...state, isLoading: true }),

    [deleteChapter.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: false,
      entries: state.entries.filter(
        (chapter) => chapter._id !== action.payload.result[0]
      ),
    }),

    [deleteChapter.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      // detailed message is truncated in payload,
      // action.error.response.data.message not working anymore
      error: action.error.message,
    }),

    [editChapter.pending]: (state, action) => ({ ...state, isLoading: true }),

    [editChapter.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: false,
      entries: state.entries.map((chapter) => {
        if (chapter._id !== action.payload._id) return chapter;
        return { ...chapter, title: action.payload.title };
      }),
    }),

    [editChapter.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      // detailed message is truncated in payload,
      // action.error.response.data.message not working anymore
      error: action.error.message,
    }),

    [addChapter.pending]: (state, action) => ({ ...state, isLoading: true }),

    [addChapter.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: false,
      entries: state.entries.concat(action.payload),
    }),

    [addChapter.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      // detailed message is truncated in payload,
      // action.error.response.data.message not working anymore
      error: action.error.message,
    }),

    [fetchChapters.pending]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [fetchChapters.fulfilled]: (state, action) => ({
      ...initialState,
      isError: false,
      entries: action.payload,
    }),

    [fetchChapters.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.error.response.data.message,
    }),
  },
});

export const { toggleSubsection, toggleChapter } = chapterSlice.actions;
export default chapterSlice.reducer;
