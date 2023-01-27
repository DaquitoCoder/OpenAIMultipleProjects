import { script } from './api';
import Loading from '../components/utils/Loading';
import Error from '../components/utils/Error';

export const ScriptingData = async ({ prompt, media }) => {
  const response = await script(prompt, media);
  return response;
};

export const LoadingData = (loading, results, Component) => {
  if (loading) {
    return <Loading />;
  } else if (results?.status === 404) {
    return <Error message={results?.body.detail} />;
  } else if (results?.status === 200) {
    return <Component body={results?.body} />;
  }
};
