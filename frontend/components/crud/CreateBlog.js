import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getTags } from "../../actions/tag";
import { getCategories } from "../../actions/category";
import { createBlog } from "../../actions/blog";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";

const CreateBlog = ({ router }) => {
  return (
    <div>
      <h2>create blog form</h2>
      {JSON.stringify(router)}
    </div>
  );
};

export default withRouter(CreateBlog);
