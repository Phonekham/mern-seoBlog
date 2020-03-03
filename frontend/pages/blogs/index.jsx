import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import { API } from "../../config";
import Layout from "../../components/Layout";

const Blogs = () => {
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
            <div className="col-md-12">Show all blogs</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blogs;
