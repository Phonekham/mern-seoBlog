import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removeBlog } from "../../actions/blog";

const BlogRead = () => {
  return (
    <React.Fragment>
      <p>update delete blog</p>
    </React.Fragment>
  );
};

export default BlogRead;
