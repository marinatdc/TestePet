import { GlobalModalType } from '@/shared/components/modal/globalModal/globalModal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GlobalStore {
    modal: GlobalModalType;
}

const initialState: GlobalStore = {
    modal: {
        visible: false,
        text: '',
        title: '',
    }
}

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action : PayloadAction<GlobalModalType>) => {
      state.modal = action.payload
    },
  },
})


export const { setModalAction } = globalSlice.actions

export default globalSlice.reducer