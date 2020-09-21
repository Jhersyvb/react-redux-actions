import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from './layout'
import PostAdmin from './postAdmin'
import Post from './post'
import {
  createPost as createPostAction,
  getPosts as getPostsAction,
  getComments as getCommentsAction,
  createComment as createCommentAction,
} from '../redux/actions'

class Root extends Component {
  state = {}

  componentDidMount() {
    const { getComments, getPosts } = this.props

    getPosts([])
    getComments([])
  }

  render() {
    const { comments, posts, createComment, createPost } = this.props

    return (
      <Layout>
        <PostAdmin createPost={createPost} />

        {posts.map(post => (
          <Post
            key={post.id}
            postId={post.id}
            author="Guest"
            content={post.content}
            imageUrl={post.image}
            comments={comments.filter(comment => comment.postId === post.id)}
            createComment={createComment}
          />
        ))}
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    posts: state.posts,
  }
}

const mapDispatchToProps = {
  createPost: createPostAction,
  getPosts: getPostsAction,
  getComments: getCommentsAction,
  createComment: createCommentAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
