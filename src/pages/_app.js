import { RecoilRoot } from "recoil";
import Layout from "components/layout";
import { globalStyles } from "../styles";

function App({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
