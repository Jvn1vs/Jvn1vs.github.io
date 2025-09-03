var posts=["2025/08/29/发轫--故事的开篇/","2025/08/30/是时候搭一个图床了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };