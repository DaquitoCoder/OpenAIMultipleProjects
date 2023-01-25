const apiUrl = import.meta.env.VITE_API_URI;

const sendRequest = async (url, data, method = 'POST') => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options).then((r) =>
    r.json().then((data) => ({ status: r.status, body: data }))
  );
  return response;
};

export const startGame = async () => {
  const url = `${apiUrl}/start/`;
  const response = await sendRequest(url, {});
  return response;
};

export const action = async (prompt) => {
  const url = `${apiUrl}/action/`;
  const data = { prompt };
  const response = await sendRequest(url, data);
  return response;
};

export const critic = async (prompt) => {
  const url = `${apiUrl}/critic/`;
  const data = { prompt };
  const response = await sendRequest(url, data);
  return response;
};

export const copyWritter = async (
  name,
  description,
  targetAudience,
  keySelling,
  desiredTone
) => {
  const url = `${apiUrl}/copy/`;
  const data = {
    name,
    description,
    target_audience: targetAudience,
    key_selling_points: keySelling,
    desired_tone: desiredTone,
  };
  const response = await sendRequest(url, data);
  return response;
};

export const resume = async (description) => {
  const url = `${apiUrl}/resume/`;
  const data = { description };
  const response = await sendRequest(url, data);
  return response;
};

export const script = async (prompt, media) => {
  const url = `${apiUrl}/script/`;
  const data = { prompt, media };
  const response = await sendRequest(url, data);
  return response;
};

export const sentimentAnalysis = async (prompt) => {
  const url = `${apiUrl}/sentiment/`;
  const data = { prompt };
  const response = await sendRequest(url, data);
  return response;
};
