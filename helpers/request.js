const request = (method, url, value, setNotText, setNotTitle, t) => {
  fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...value }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.ok) {
        setNotText(t('thanks_text'));
        setNotTitle(t('thanks'));
      } else if (!response.ok) {
        setNotText(t('error_text'));
        setNotTitle(t('error_title'));
      } else {
        setNotText(t('error_text'));
        setNotTitle(t('error_title'));
      }
    })
    .catch((error) => {
      setNotText(t('error_text'));
      setNotTitle(t('error_title'));
    });
};

export default request;
