const express = require('express');
const router = express.Router();
const Person = require('../models/Person');



router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();//ye do chij deta hai response and erro response for success an error if somthing error ocr jb error ayegi to sidhe catch block me jayega

    console.log("data saved");
    res.status(201).json(response);


  }
  catch (error) {
    console.log("eror in saving data", error);
    res.status(500).json({ "error": "internal error" });

  }


})
//
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal error" });
  }
})
//
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;//ye jo hum url me type bhejege usko frtch kr rha
    if (workType == 'chef' || workType == 'owner' || workType == 'manager') {
      const response = await Person.find({ work: workType });
      console.log("responsed fetched");
      res.status(201).json(response);

    }
    else {
      console.log("no employe exist of this type");
    }

  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "internal error" });

  }
})
//for updating person data
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const personData = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(personId, personData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });
    if (!personData) {
      console.log("person not found");
    }
    console.log("data updated");
    res.json(updatedPerson);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal error" });
  }

})
router.delete('/:id',async(req,res)=>{
  try{
  const personId=req.params.id;
  const deletedPerson = await Person.findByIdAndDelete(personId);
  if (!deletedPerson) {
  return res.status(404).json({ error: 'Person not found' });
  }
  console.log("person deleted");  // Send a success message as a JSON response
  res.json({ message: 'Person deleted successfully' });
  } catch (error) {
  console.error('Error deleting person:', error);
  res.status(500).json({ error: 'Internal server error' });
  }
})
module.exports = router;