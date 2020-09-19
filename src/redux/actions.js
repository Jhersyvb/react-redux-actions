import { createAction } from 'redux-actions'

export const createPost = createAction('createPost')
export const getPosts = createAction('getPosts')

export const createComment = createAction('createComment')
export const getComments = createAction('getComments')
