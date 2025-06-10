import { UserType } from '@/shared/components/types/userType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserStore {
    user?: UserType
}

const initialState: UserStore = {
    user: undefined,
}

export const userSlice = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    setUserAction: (state, action : PayloadAction<UserType>) => {
      state.user = action.payload
    },
  },
})


export const { setUserAction } = userSlice.actions

export default userSlice.reducer