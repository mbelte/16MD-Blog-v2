import { useParams } from 'react-router-dom';
import { useMutation, useQueries } from '@tanstack/react-query';
import BlogPost from '../../components/BlogPost/BlogPost';
import style from './BlogPost.module.scss'
import { BlogPostCommentType, commentFormData, commentPostData } from '../../assets/scripts/helpers/types';
import BlogComment from '../../components/BlogComment/BlogComment';
import { getComments, getPost, postComment } from '../../assets/scripts/helpers/apiCalls';
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import { Toast } from 'react-toastify/dist/components';

export type BlogPostPage = {};

const BlogPostPage = () => {
  const { postId } = useParams()

  const postQueries = useQueries({
    queries: [
      {
      queryKey: ['article', postId],
        queryFn: () => getPost(postId)
      },
      {
      queryKey: ['comments', postId],
        queryFn: () => getComments(postId)
      },
    ]
  });

  const mutation = useMutation({
    
  })

  if (postQueries[0].isLoading || postQueries[1].isLoading) {
    return <h1>Loading request</h1>;
  }
  if (postQueries[0].isError || postQueries[1].isError) {
    return <h1>Request error</h1>;
  }

  const   post = postQueries[0].data,
          comments = postQueries[1].data

  const addComment = (formData: commentFormData) => {
    postComment({ ...formData, postId })
  }

  return (
    <div className='post-wrap'>
      <BlogPost 
        key={ post.id }
        id={ post.id }
        title={ post.title }
        author={ post.author }
        image={ post.image }
        content={ post.content }
      />
      <div className={ style.commentsSection }>
        <h3 className={ style.heading }>
            Add your comment
        </h3>
        <CommentsForm 
          onSubmit={ addComment }
        />
        <div className={ style.comments }>
          <h3 className={ style.heading }>
            Comments
          </h3>
          { comments.length ? renderComments(comments) : <p>There are no comments yet ...</p> }
        </div>
      </div>
    </div>
  )
};

const renderComments = (comments: Omit<BlogPostCommentType[], 'postId'>) => {
  return (
    comments.map(({ id, author, body }) => (
      <BlogComment
        key={ id }
        author={ author }
        body={ body }
      />
    ))
  )
}

export default BlogPostPage;
