import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { isAuth, getCookie } from "../../actions/auth";
import { create, getTag, getTags, removeTag } from "../../actions/tag";

const Category = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    tags: [],
    removed: false,
    reload: false
  });
  const { name, error, success, tags, removed, reload } = values;
  const token = getCookie("token");

  useEffect(() => {
    loadTags();
  }, [reload]);

  const loadTags = () => {
    getTags().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, tags: data });
      }
    });
  };

  const showTags = () => {
    return tags.map((t, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(t.slug)}
          title="Double click to Delete"
          key={i}
          className="btn btn-outline-primary mr-1 ml-1 mt-3"
        >
          {t.name}
        </button>
      );
    });
  };

  const deleteConfirm = slug => {
    let answer = window.confirm("U sure to delete");
    if (answer) deleteTag(slug);
  };

  const deleteTag = slug => {
    removeTag(slug, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: "",
          removed: !removed,
          reload: !reload
        });
      }
    });
  };

  const clickSubmit = e => {
    e.preventDefault();
    create({ name }, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
          success: true,
          reload: !reload,
          removed: false,
          name: ""
        });
      }
    });
  };

  const handleChange = e => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: ""
    });
  };

  //   Show Message
  const showSuccess = () => {
    if (success) return <p className="text-success">tag Created </p>;
  };
  const showError = () => {
    if (error) return <p className="text-danger">tag already exist</p>;
  };
  const showRemoved = () => {
    if (removed) return <p className="text-danger">tag is removed</p>;
  };

  const mouseLeaveHandler = e => {
    setValues({ ...values, error: false, success: false, removed: "" });
  };

  const newTagForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  );
  return (
    <React.Fragment>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      <div onMouseMove={mouseLeaveHandler}>
        {newTagForm()}
        {showTags()}
      </div>
    </React.Fragment>
  );
};

export default Category;
