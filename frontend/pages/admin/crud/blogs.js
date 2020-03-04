import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link";
import BlogsRead from "../../../components/crud/BlogsRead";

const Blogs = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>List Blogs</h2>
            </div>
            <div className="col-md-12">
              <BlogsRead />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blogs;
