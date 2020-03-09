import Head from "next/head";
import Layout from "../../components/Layout";
import { getCategory } from "../../actions/category";
import { APP_NAME, DOMAIN, FB_APP_ID } from "../../config";
import Card from "../../components/blog/Card";

const Category = ({ category, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {category.name} | {APP_NAME}
      </title>
      <meta
        name="description"
        content={`Best programming tutorials on ${category.name}`}
      />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
      <meta
        property="og:description"
        content={`Best programming tutorials on ${category.name}`}
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

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
