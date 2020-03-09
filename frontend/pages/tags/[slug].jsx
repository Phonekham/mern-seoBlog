import Head from "next/head";
import Layout from "../../components/Layout";
import { getTag } from "../../actions/tag";
import { APP_NAME, DOMAIN, FB_APP_ID } from "../../config";
import Card from "../../components/blog/Card";

const Tag = ({ tag, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta
        name="description"
        content={`Best programming tutorials on ${tag.name}`}
      />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta
        property="og:description"
        content={`Best programming tutorials on ${tag.name}`}
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
      {head()}
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
        blogs: data.blogs,
        query,
        query
      };
    }
  });
};

export default Tag;
