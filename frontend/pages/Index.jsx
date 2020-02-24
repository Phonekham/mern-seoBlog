import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Layout>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </Layout>
    </div>
  );
};

export default Index;
