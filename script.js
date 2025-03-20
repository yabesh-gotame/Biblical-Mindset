function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Fetch Blog Posts from Jetpack API
async function fetchBlogPosts() {
    const blogContainer = document.getElementById("blog-posts");

    try {
        const response = await fetch("https://your-jetpack-blog.com/wp-json/wp/v2/posts");
        const posts = await response.json();

        blogContainer.innerHTML = ""; // Clear loading text

        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("blog-post");

            postElement.innerHTML = `
                <h2>${post.title.rendered}</h2>
                <p>${post.excerpt.rendered}</p>
                <a href="${post.link}" target="_blank">Read More</a>
            `;

            blogContainer.appendChild(postElement);
        });
    } catch (error) {
        blogContainer.innerHTML = "<p>Failed to load blog posts. Please try again later.</p>";
    }
}

// Call function if on blogs page
if (document.getElementById("blog-posts")) {
    fetchBlogPosts();
                  }
