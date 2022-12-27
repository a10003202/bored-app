const baseUrl = 'http://www.boredapi.com/api/'

// GET with fetch API
const search = async (params) => {
  try {
    let allowedParams = (({ key, type, participants,
      price, minprice, maxprice, accessibility,
      minaccessibility, maxaccessibility }) => ({ key, type, participants,
        price, minprice, maxprice, accessibility,
        minaccessibility, maxaccessibility }))(params);
    allowedParams = Object.entries(allowedParams).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
    const searchParams = new URLSearchParams(allowedParams);
    const paramsStr = searchParams.toString();
    const url = `${baseUrl}activity?${paramsStr}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
     console.log(error);
  }
};

// GET with fetch API
const fetchPost = async () => {
  try {
    const url = `${baseUrl}users?_expand=typeUser`;
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  } catch (error) {
     console.log(error);
  }
};

// Delete with fetchAPI
const deletePost = async (id) => {
  const url = `${baseUrl}users/${id}`;
  let response = await fetch(
     url,
     {
        method: 'DELETE',
     }
  );
  if (response.status === 200) {
     setPosts(
        posts.filter((post) => {
           return post.id !== id;
        })
     );
  } else {
     return;
  }
};

// Post with fetchAPI
const addPosts = async (title, body) => {
  const url = `${baseUrl}users`;
  let response = await fetch(url, {
     method: 'POST',
     body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  });
  let data = await response.json();
  setPosts((posts) => [data, ...posts]);
  setTitle('');
  setBody('');
};

const Activity = {
  search: search
}

export default Activity;