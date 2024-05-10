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
      if (response.code === 200) {
        setNotText(t('thanks_text'));
        setNotTitle(t('thanks'));
        setTimeout(() => {
          setNotTitle('');
        }, 3000);
      } else if (response.code === 422) {
        setNotText(t('error_text'));
        setNotTitle(t('error_title'));
        setTimeout(() => {
          setNotTitle('');
        }, 3000);
      } else {
        setNotText(t('error_text'));
        setNotTitle(t('error_title'));
        setTimeout(() => {
          setNotTitle('');
        }, 3000);
      }
    })
    .catch((error) => {
      setNotText(t('error_text'));
      setNotTitle(t('error_title'));
      setTimeout(() => {
        setNotTitle('');
      }, 3000);
    });
};

export default request;
