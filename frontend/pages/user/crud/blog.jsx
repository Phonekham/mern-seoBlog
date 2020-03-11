import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import Link from "next/link";
import CreateBlog from "../../../components/crud/CreateBlog";

const Blog = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Create new Blog</h2>
            </div>
            <div className="col-md-12">
              <CreateBlog></CreateBlog>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
