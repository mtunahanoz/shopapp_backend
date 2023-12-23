#modules

express body-parser firebase-admin


connectDb("users").then((userData) => {
  console.log(userData);
});

// Örneğin, getDataById fonksiyonunu kullanmak
getDataById("users", "document_id_here").then((docData) => {
  console.log(docData);
});