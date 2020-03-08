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

const BlogUpdate = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          <p>update form</p>
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

export default BlogUpdate;
