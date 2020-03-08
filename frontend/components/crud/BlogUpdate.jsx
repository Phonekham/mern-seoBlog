import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getTags } from "../../actions/tag";
import { getCategories } from "../../actions/category";
import { singleBlog, updateBlog } from "../../actions/blog";
import { QuillFormats, QuillModules } from "../../helpers/quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";

const BlogUpdate = ({ router }) => {
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    title: "",
    body: ""
  });

  const { error, success, formData, title } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initBlog();
  }, [router]);

  const initBlog = () => {
    if (router.query.slug) {
      singleBlog(router.query.slug).then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({ ...values, title: data.title });
          setBody(data.body);
        }
      });
    }
  };

  const handleBody = e => {
    setBody(e);
    formData.set("body", e);
  };

  const handleChange = name => e => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const editBlog = () => {
    console.log("update blog");
  };

  const updateBlogForm = () => {
    return (
      <form onSubmit={editBlog}>
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
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write somthing..."
            onChange={handleBody}
          ></ReactQuill>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          {updateBlogForm()}
          <div className="pt-3">
            {/* {showSuccess()}
                {showError()} */}
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="form-group pb-2">
            <h5>Featured image</h5>
            <hr></hr>
            <small className="text-muted">Max size: 1mb</small>
            <label className="btn btn-outline-info">
              Upload featured image
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlogUpdate);
