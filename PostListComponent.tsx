import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchPosts } from './redux/postsSlice';
import './PostListComponent.css';

const PostListComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const postStatus = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postStatus]);

  let content;

  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {
    content = (
      <table>
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      {content}
    </div>
  );
};

export default PostListComponent;
