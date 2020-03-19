import Layout from "../../components/Layout";
import Link from "next/link";
import Private from "../../components/auth/Private";

const UserIndex = () => {
  return (
    <div>
      <Layout>
        <Private>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pt-5 pb-5">
                <h2>User Dashboard</h2>
              </div>
              <div className="col-md-4">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link href="/user/crud/blog">
                      <a>Create Blog</a>
                    </Link>
                  </li>
                </ul>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link href="/user/crud/blogs">
                      <a>Update/Delete Blogs</a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/user/update">
                      <a>Update Profile</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-8"></div>
            </div>
          </div>
        </Private>
      </Layout>
    </div>
  );
};

export default UserIndex;
