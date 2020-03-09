import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getTag } from "../../actions/tag";
import Card from "../../components/blog/Card";

const Tag = ({ tag, blogs }) => {
  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className="container-fluid text-center">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="dosplay-4 font-wieght-bold">{tag.name}</h1>
                {blogs.map((t, i) => (
                  <Card key={i} blog={t}></Card>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Tag.getInitialProps = ({ query }) => {
  return getTag(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        tag: data.tag,
        blogs: data.blogs
      };
    }
  });
};

export default Tag;
