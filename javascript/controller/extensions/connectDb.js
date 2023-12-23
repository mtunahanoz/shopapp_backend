// dbConnect.js

const admin = require("./firebaseAdmin");
const db = admin.firestore();

module.exports = {
  db: db,
  getDataById: function(collection_name, document_id) {
    let docRef = db.collection(collection_name).doc(document_id);

    return docRef.get().then((doc) => {
      if (doc.exists) {
        return { id: doc.id, ...doc.data() };
      } else {
        console.error("Document not found");
        return null;
      }
    });
  },

  connectDb: function(collection_name) {
    let find = db.collection(collection_name);

    return find.get().then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((document) => {
        data.push({ id: document.id, ...document.data() });
      });
      return data;
    });
  },
};
