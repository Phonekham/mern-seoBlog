import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    result: [],
    searched: false,
    message: ""
  });

  const { search, result, searched, message } = values;

  const searchSubmit = e => {
    e.preventDefault();
    listSearch({ search }).then(data => {
      setValues({
        ...values,
        result: data,
        searched: true,
        message: `${data.length} blog found`
      });
    });
  };

  const handleChange = e => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      result: []
    });
  };

  const searchBlogs = (results = []) => {
    return (
      <div className="jumbotron bg-white">
        {message && <p className="pt-4 text-muted font-italic">{message}</p>}
        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="text-primary">{blog.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className="row">
        <div className="col-md-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search blog"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-blog btn-outline-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container">
      <div className="pt-3 pb-5">{searchForm()}</div>
      {searched && <div style={{}}>{searchBlogs(result)}</div>}
    </div>
  );
};

export default Search;
