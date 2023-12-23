const express = require('express');
const router = express.Router();
const {db, connectDb, getDataById} = require("../controller/extensions/connectDb")

// Örnek route: /doc/:data_name/:doc_id
router.get('/:data_name/:doc_id', (req, res) => {
  const { data_name, doc_id } = req.params;


    getDataById(data_name, doc_id).then((docData) => {
        res.send(docData);
      });
  

  // Boş doc_id durumunu dikkate alarak işlem yapabilirsiniz

});

router.get('/:data_name/', (req, res) => {
    const { data_name, doc_id } = req.params;
  
  
  
    if(!doc_id){
      connectDb(data_name).then((userData) => {
          res.send(userData);
   
        });
  
    }
  
  
  });

module.exports = router;