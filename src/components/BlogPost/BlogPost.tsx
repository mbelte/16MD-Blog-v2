import style from './BlogPost.module.scss'
import { BlogPostType } from '../../assets/scripts/helpers/types';

const BlogPost = ({id, title, author, image, content}: BlogPostType) => {
  return (
    <div key={ id } className={ style.post }>
        <div className={ style.imageWrap }>
            <img src={ image } alt={ title } className={ style.image } />
        </div>
        <div className={ style.header }>
            <h2 className={ style.heading }>
                { title }
            </h2>

            <span className={ style.subheading }>
                {author}
            </span>
        </div>

        <div className={ style.content }>
            {content}
        </div>
    </div>
  )
};

export default BlogPost;
