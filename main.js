document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  siteName = document.getElementById("siteName").value;
  siteUrl = document.getElementById("siteUrl").value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  if (localStorage.getItem("bookmarks") === null) {
    var bookmarks = [];

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  e.preventDefault();
}
