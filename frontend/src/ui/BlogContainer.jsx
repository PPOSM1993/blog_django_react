import PropTypes from 'prop-types';
import BlogCard from "./BlogCard";
import Spinner from "./Spinner";

const BlogContainer = ({ isPending, blogs }) => {
  if (isPending) {
    return <Spinner />;
  }

  return (
    <section className="padding-x py-6 max-container">
      <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
        🍔Latest Posts
      </h2>

      <div className="flex items-center gap-6 justify-center flex-wrap">
\
      </div>
    </section>
  );
};

// Validaciones con PropTypes
BlogContainer.propTypes = {
  isPending: PropTypes.bool.isRequired,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

// Valores por defecto
BlogContainer.defaultProps = {
  blogs: [],
};

export default BlogContainer;
