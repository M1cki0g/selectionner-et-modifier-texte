function change() {
  let p = document.getElementsByTagName("h1");
  console.log(p);
  p[0].innerHTML = "<h1>Titre modifier</h1>";

  let c = document.getElementsByClassName("paragraphe");
  // Array.from(c).forEach((p) => {
  //   console.log(p);
  //   p.innerHTML = "<p>paragraphe modifier</p>";
  // });

  for (let i = 0; i < c.length; i++) {
    c[i].innerHTML = "<p>paragraphe modifier</p>";
  }
}
