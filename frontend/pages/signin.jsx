import Layout from "../components/Layout";
import { withRouter } from "next/router";
import SigninComponent from "../components/auth/SigninComponent";

const signin = ({ router }) => {
  const showRedirectmessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Signin page</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">{showRedirectmessage()}</div>
        <div className="col-md-6 offset-md-3">
          <SigninComponent></SigninComponent>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(signin);
