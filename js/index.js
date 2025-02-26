console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);
document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("comment-input");
  const submitButton = document.getElementById("submit-comment");
  const commentList = document.getElementById("comment-list");

  function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(commentText => {
      addCommentElement(commentText);
    });
  }

  function addCommentElement(commentText) {
    const commentItem = document.createElement("li");
    commentItem.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;
    commentList.appendChild(commentItem);
  }

  function addComment() {
    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    addCommentElement(commentText);

    // 로컬 스토리지에 저장
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(savedComments));

    commentInput.value = "";
    alert("댓글이 등록되었습니다.");
  }

  submitButton.addEventListener("click", addComment);

  commentInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      addComment();
    }
  });

  // 페이지 로드 시 댓글 불러오기
  loadComments();
});