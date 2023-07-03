import { MongoClient } from "mongodb";
import  express  from "express";
import cors from "cors";


const app=express();
app.use(cors());

async function add(req, res)
{
    const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("message");

  let inputDoc = {
    message: req.query.message,
  };
  await messageColl.insertOne(inputDoc);

  await client.close();
  res.json({ opr: "success" });
}

/**Tax Pay Api */
async function addTaxUser(req, res)
{
  try{const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("Project");
  const msg = db.collection("TaxPayDetail");

  let inputDoc = {
    FirstName: req.query.fname,
    LastName: req.query.lname,
    HouseNumber: req.query.hNumber,
    Mobile: req.query.mobile,
  };
  await msg.insertOne(inputDoc);

  await client.close();
  res.json({ opr: "success" });
  }
  catch(err)
  {
    res.status(500).send(err.message);
  }
  
}

/**Water Bill Info API */
async function addWaterBillUser(req, res)
{
    try{const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
  
    const db = client.db("Project");
    const msg = db.collection("WaterBillDetail");
  
    let inputDoc = {
      FirstName: req.query.fname,
      LastName: req.query.lname,
      MeterNumber: req.query.meterNumber,
      Mobile: req.query.mobile,
      Amount: req.query.amount,
    };
    await msg.insertOne(inputDoc);
  
    await client.close();
    res.json({ opr: "success" });
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}
async function readAllWaterUser(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("WaterBillDetail");
    
        let userRef = await msg.find().toArray();
    
        await client.close();

        if(!userRef)
        {
            let errorMessage = `Record Not Found or Authentication Failure`;
            throw new Error(errorMessage);
        }

        res.json(userRef)
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}


/**Meeting Info API */
async function addMeetingDate(req, res)
{
    try{const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
  
    const db = client.db("Project");
    const msg = db.collection("MeetingInfo");
  
    let inputDoc = {
      SrNo: req.query.srno,
      Date: req.query.date,
      Month: req.query.month,
      Location: req.query.location,
    };
    await msg.insertOne(inputDoc);
  
    await client.close();
    res.json({ opr: "success" });
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}

async function deleteMeetingRecord(req, res)
{
    try{const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
  
    const db = client.db("Project");
    const msg = db.collection("MeetingInfo");
  
    if(!req.query.date)
    {
        throw new Error("Field Require");
    }

    await msg.deleteOne({Date: req.query.date})
  
    await client.close();
    res.json({ opr: "success" });
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}
async function updateSingleRecord(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("MeetingInfo");

        const result = await msg.updateOne({SrNo: req.query.srno}, {
            $set : {
                Date : req.query.date,
                Month : req.query.month,
                Location : req.query.location,
            }
        });

        if(!result)
        {
            let errorMessage = `Record Not Found or Authentication Failure`;
            throw new Error(errorMessage);
        }

        res.json(result);
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}


async function readMeetingDate(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("MeetingInfo");
    
        let list = await msg.find().toArray();
    
        await client.close();
        res.json(list)
    
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}

/** Login API*/
async function addLogin(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("Login");
    
        let inputDoc = {
            UserName: req.query.uname,
            Password: req.query.pass,
        };
        await msg.insertOne(inputDoc);
    
        await client.close();
        res.json({ opr: "success" });
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}

/** Tax Payer Detail*/
async function addAllTaxPayer(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("TaxDetail");
    
        let inputDoc = {
            Name: req.query.name,
            PropertyNumber: req.query.number,
            Year: req.query.year,
            Amount: req.query.amount,
            DueDate: req.query.dueDate,
            
        };
        await msg.insertOne(inputDoc);
    
        await client.close();
        res.json({ opr: "success" });
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}

async function readTaxPayer(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("TaxDetail");
    
        let query={PropertyNumber: req.query.number};
        let userRef = await msg.findOne(query);
    
        await client.close();

        if(!userRef)
        {
            let errorMessage = `Record Not Found or Authentication Failure`;
            throw new Error(errorMessage);
        }

        res.json(userRef)
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}

/**Use in Fund for calculation */
async function readAllTaxPayer(req, res)
{
    try{
        const uri = "mongodb://127.0.0.1:27017";
        const client = new MongoClient(uri);
    
        const db = client.db("Project");
        const msg = db.collection("TaxDetail");
    
        let userRef = await msg.find().toArray();
    
        await client.close();

        if(!userRef)
        {
            let errorMessage = `Record Not Found or Authentication Failure`;
            throw new Error(errorMessage);
        }

        res.json(userRef)
    }
    catch(err)
    {
      res.status(500).send(err.message);
    }
}

/**Donation API */
async function adduserDonation(req, res) {
    try {
      const uri = "mongodb://127.0.0.1:27017";
      const client = new MongoClient(uri);
  
      const db = client.db("Project");
      const messageColl = db.collection("Donation");
  
      let inputDoc = {
        
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        mobno: req.query.mobno,
        gmail: req.query.gmail,
        donation:req.query.donation
       
      };
      await messageColl.insertOne(inputDoc);
  
      await client.close();
  
      res.json({ opr: "success" });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

/**Suggestion API */
async function adduserSuggestion(req, res) {
    try {
      const uri = "mongodb://127.0.0.1:27017";
      const client = new MongoClient(uri);
  
      const db = client.db("Project");
      const messageColl = db.collection("Suggestion");
  
      let inputDoc = {
        
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        mobno: req.query.mobno,
        gmail: req.query.gmail,
        suggestion:req.query.suggestion
       
      };
      await messageColl.insertOne(inputDoc);
  
      await client.close();
  
      res.json({ opr: "success" });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

/**Registratin API */
async function adduserRecord(req, res) {
    try {
      const uri = "mongodb://127.0.0.1:27017";
      const client = new MongoClient(uri);
  
      const db = client.db("Project");
      const messageColl = db.collection("user");
  
      let inputDoc = {
        username: req.query.username,
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        gmail: req.query.gmail,
        mobno: req.query.mobno,
        password: req.query.password,
        confirmpassword: req.query.confirmpassword,
      };
      await messageColl.insertOne(inputDoc);
  
      await client.close();
  
      res.json({ opr: "success" });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

/**To check valid user or not */
async function loginByGet(req, res) {
    try {
      const uri = "mongodb://127.0.0.1:27017";
      const client = new MongoClient(uri);
  
      const db = client.db("Project");
      const messageColl = db.collection("user");
  
      let query = { username: req.query.username, password: req.query.password };
      let userRef = await messageColl.findOne(query);
  
      await client.close();
  
      // Negative: UserRef CANBE NULL;
      if (!userRef) {
        let errorMessage = `Record Not Found Please Register Yourself: ${req.query.username}`;
        throw new Error(errorMessage);
      }
  
      // Postive Scenario
      res.json(userRef);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

/**Contact API */
async function contactMsg(req, res)
{
  const url="mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  let db = client.db("Project");
  let msg = db.collection("ContactUs");

  let Doc={
    FirstName:req.query.fname,
    LastName:req.query.lname,
    MobileNo:req.query.mobile,
    Email:req.query.email,
    Msg:req.query.msg,
  };

  await msg.insertOne(Doc);
  await client.close();

}


/**http://localhost:9000 */
app.get("/login-by-get", loginByGet);
app.get("/contactMsg", contactMsg);
app.get("/adduser", adduserRecord);
app.get("/updateSingleRecord", updateSingleRecord);
app.get("/readAllWaterUser", readAllWaterUser);
app.get("/readAllTaxPayer", readAllTaxPayer);
app.get("/deleteMeetingRecord", deleteMeetingRecord);
app.get("/adduserSuggestion",adduserSuggestion);
app.get("/adduserDonation", adduserDonation);
app.get("/readTaxPayer", readTaxPayer);
app.get("/addAllTaxPayer", addAllTaxPayer);
app.get("/addLogin", addLogin);
app.get("/readMeetingDate", readMeetingDate)
app.get("/addMeetingDate",addMeetingDate);
app.get("/addWaterBillUser",addWaterBillUser);
app.get("/addTaxUser",addTaxUser);
app.get("/add", add);


app.listen(9000);