import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";

import Card from "../../components/blog/Card";

const Blogs = ({ blogs, tags, categories, size }) => {
  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <article key={i}>
          <Card blog={blog}></Card>
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
