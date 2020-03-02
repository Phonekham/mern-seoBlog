import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getTags } from "../../actions/tag";
import { getCategories } from "../../actions/category";
import { createBlog } from "../../actions/blog";
import { QuillFormats, QuillModules } from "../../helpers/quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";

const CreateBlog = ({ router }) => {
  const blogFromLS = () => {
    if (typeof window === "undefined") return false;
    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  // const [checked, setChecked] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]);
  const [checkedCatgory, setCheckedCategory] = useState([]);
  const [body, setBody] = useState(blogFromLS);
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

  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCatgories();
    initTags();
  }, [router]);

  const initCatgories = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const publishBlog = e => {
    e.preventDefault();
    createBlog(formData, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          error: "",
          success: `A new blog title "${data.title}" is created`
        });
        setBody("");
        setCategories([]);
        setTags([]);
      }
    });
  };

  const handleChange = name => e => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = e => {
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleCategoryToggle = c => () => {
    setValues({ ...values, error: "" });
    const clickedCategory = checkedCatgory.indexOf(c);
    const all = [...checkedCatgory];
    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setCheckedCategory(all);
    formData.set("categories", all);
  };

  const handleTagToggle = t => () => {
    setValues({ ...values, error: "" });
    const clickedTag = checkedTag.indexOf(t);
    const all = [...checkedTag];
    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleCategoryToggle(c._id)}
            type="checkbox"
            className="mr-2"
          ></input>
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleTagToggle(t._id)}
            type="checkbox"
            className="mr-2"
          ></input>
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );

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
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write somthing..."
            onChange={handleBody}
          ></ReactQuill>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          {createBlogForm()}
          <div className="pt-3">
            {showSuccess()}
            {showError()}
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="form-group pb-2">
            <h5>Featured image</h5>
            <hr></hr>
            <small className="text-muted">Max size: 1mb</small>
            <label className="btn btn-outline-info">
              Upload featured image
              <input
                onChange={handleChange("photo")}
                type="file"
                accept="image/*"
                hidden
              ></input>
            </label>
          </div>
          <h5>Categories</h5>
          <hr></hr>
          <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
            {showCategories()}
          </ul>
          <hr></hr>
          <h5>Tags</h5>
          <hr></hr>
          <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
            {showTags()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
