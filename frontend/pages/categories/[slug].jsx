import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getCategory } from "../../actions/category";
import { API, APP_NAME, DOMAIN, FB_APP_ID } from "../../config";
import Card from "../../components/blog/Card";

const Category = ({ category, blogs }) => {
  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className="container-fluid text-center">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="dosplay-4 font-wieght-bold">{category.name}</h1>
                {blogs.map((b, i) => (
                  <Card key={i} blog={b}></Card>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Category.getInitialProps = ({ query }) => {
  return getCategory(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        category: data.category,
        blogs: data.blogs
      };
    }
  });
};

export default Category;
