const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const postFeedEl = document.getElementById("post-feed");

// Hàm để render các bài đăng ra màn hình
function renderPosts() {
    let feedHtml = "";
    posts.forEach((post, index) => {
        // Tạo HTML cho mỗi bài đăng bằng template literal
        feedHtml += `
            <article class="post">
                <header class="post-header">
                    <img class="avatar" src="${post.avatar}" alt="Avatar of ${post.name}">
                    <div class="post-header-info">
                        <p class="name">${post.name}</p>
                        <p class="location">${post.location}</p>
                    </div>
                </header>
                <img class="post-image" src="${post.post}" alt="Post by ${post.name}" data-post-index="${index}">
                <div class="post-body">
                    <div class="post-actions">
                        <img class="action-icon" src="images/icon-heart.png" alt="Like icon" data-like-index="${index}">
                        <img class="action-icon" src="images/icon-comment.png" alt="Comment icon">
                        <img class="action-icon" src="images/icon-dm.png" alt="Share icon">
                    </div>
                    <p class="post-likes" id="likes-count-${index}">${post.likes.toLocaleString()} likes</p>
                    <p class="post-comment">
                        <span class="username">${post.username}</span> ${post.comment}
                    </p>
                </div>
            </article>
        `;
    });
    // Chèn HTML đã tạo vào trong thẻ main
    postFeedEl.innerHTML = feedHtml;
}

// Hàm để xử lý sự kiện click
function addEventListeners() {
    // Sử dụng event delegation để bắt sự kiện trên toàn bộ feed
    postFeedEl.addEventListener('click', function(e) {
        if (e.target.dataset.likeIndex) {
            handleLikeClick(e.target.dataset.likeIndex);
        }
    });

    postFeedEl.addEventListener('dblclick', function(e) {
        if (e.target.dataset.postIndex) {
            handleLikeClick(e.target.dataset.postIndex);
        }
    });
}

// Hàm xử lý khi người dùng nhấn like
function handleLikeClick(index) {
    // Tăng số lượt thích trong mảng dữ liệu
    posts[index].likes++;
    // Cập nhật lại số lượt thích trên giao diện
    document.getElementById(`likes-count-${index}`).textContent = `${posts[index].likes.toLocaleString()} likes`;
}

// Chạy các hàm khi tải trang
renderPosts();
addEventListeners();