import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link";
import CreateBlog from "../../../components/crud/CreateBlog";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Create noew Blog</h2>
            </div>
            <div className="col-md-12">
              <CreateBlog></CreateBlog>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
