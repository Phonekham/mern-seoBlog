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
  const [body, setBody] = useState({});
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false
  });
  const {
    error,
    sizeError,
    success,
    formData,
    title,
    hidePublishButton
  } = values;

  const publishBlog = e => {
    e.preventDefault();
    console.log("ready to publish");
  };

  const handleChange = name => e => {
    return console.log(e.target.value);
  };

  const handleBody = e => {
    return console.log(e);
  };

  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            value={title}
            type="text"
            className="form-control"
            onChange={handleChange("title")}
          ></input>
        </div>
        <div className="form-group">
          <ReactQuill
            value={body}
            placeholder="Write somthing..."
            onChange={handleBody}
          ></ReactQuill>
        </div>
        <di>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </di>
      </form>
    );
  };

  return <div>{createBlogForm()}</div>;
};

export default withRouter(CreateBlog);
