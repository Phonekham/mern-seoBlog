import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import { API } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const Blogs = ({ blogs, tags, categories, size }) => {
  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <article key={i}>
          <div className="lead pb-4">
            <header>
              <Link href={`/blogs/${blog.slug}`}>
                <a>
                  <h2 className="pt-3 pb-3 font-wieght-bold">{blog.title}</h2>
                </a>
              </Link>
            </header>
            <section>
              <p className="mark ml-1 ml-1 pt-2 pb-2">
                Written by {blog.postedBy.name} | Published{" "}
                {moment(blog.updatedAt).fromNow()}
              </p>
            </section>
            <section>
              <p>Show category and tags</p>
            </section>
            <div className="row">
              <div className="col-md-4">image</div>
              <div className="col-md-8">
                <section>
                  <div className="pb-3"> {renderHTML(blog.excerpt)}</div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <a className="btn btn-primary mt-2">Read more </a>
                  </Link>
                </section>
              </div>
            </div>
          </div>
          <hr></hr>
        </article>
      );
    });
  };
  return (
    <Layout>
      <main>
        <div className="container-fluid">
          <header>
            <div className="col-md-12 pt-3">
              <h1 className="display-4 font-weight-bold text-center">
                Programming blogs and tutor
              </h1>
            </div>
            <section>
              <p>Show category and tags</p>
            </section>
          </header>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">{showAllBlogs()}</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

Blogs.getInitialProps = () => {
  return listBlogsWithCategoriesAndTags().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size
      };
    }
  });
};

export default Blogs;
