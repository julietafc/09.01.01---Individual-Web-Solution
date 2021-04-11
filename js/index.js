function getdata() {
  fetch("https://kea2s21-6ee9.restdb.io/rest/posts", {
    method: "GET",
    headers: {
      "x-apikey": "602e2bac5ad3610fb5bb629b",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showPosts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

getdata();

function showPosts(posts) {
  console.log(posts);

  //grab the template
  const template = document.querySelector("template.frontpagelist").content;
  posts.forEach((post) => {
    console.log(post);
    //clone
    const copy = template.cloneNode(true);
    //adjust stuff
    copy.querySelector(".date").textContent = post.date;
    copy.querySelector("h2").textContent = post.title;
    copy.querySelector("h3 span").textContent = post.username;
    copy.querySelector("a.readmore").href = `article.html?article=${post._id}`;

    if (post.imageUrl) {
      imageArt = post.imageUrl;
    } else {
      imageArt =
        "https://images.unsplash.com/photo-1615941341759-ab7d5188a846?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kb29yJTIwcGxhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60";
    }

    copy.querySelector(".imgPost").src = imageArt;

    //apend
    document.querySelector(".articlesList").appendChild(copy);
  });
}
