import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Update Blog</h2>
            </div>
            <div className="col-md-12">
              <BlogUpdate></BlogUpdate>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
