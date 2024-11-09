'use strict';

document.getElementById("postButton").addEventListener("click", createPost);

function createPost() {
  const postText = document.getElementById("postInput").value;
  const fileInput = document.getElementById("fileInput").files[0];
  
  if (!postText && !fileInput) return;

  const postElement = document.createElement("div");
  postElement.className = "post";

  const postHeader = document.createElement("div");
  postHeader.className = "post-header";

  const profilePic = document.createElement("img");
  profilePic.src = "./assets/img/profile-pic.png";
  profilePic.alt = "Profile Picture";

  const userInfo = document.createElement("div");
  const username = document.createElement("h3");
  username.textContent = "User Name";
  const postDate = document.createElement("span");
  postDate.textContent = new Date().toLocaleDateString();

  userInfo.appendChild(username);
  userInfo.appendChild(postDate);
  postHeader.appendChild(profilePic);
  postHeader.appendChild(userInfo);
  
  const postContent = document.createElement("div");
  postContent.className = "post-content";
  if (postText) {
    const textParagraph = document.createElement("p");
    textParagraph.textContent = postText;
    postContent.appendChild(textParagraph);
  }
  
  if (fileInput) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const postImage = document.createElement("img");
      postImage.src = e.target.result;
      postContent.appendChild(postImage);
    };
    reader.readAsDataURL(fileInput);
  }
  
  postElement.appendChild(postHeader);
  postElement.appendChild(postContent);
  
  const feed = document.getElementById("feed");
  feed.insertBefore(postElement, feed.firstChild);
  
  document.getElementById("postInput").value = "";
  document.getElementById("fileInput").value = "";
}