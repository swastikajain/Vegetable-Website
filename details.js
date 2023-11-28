const details = require("../models/details");
const adde_details = async (req, res) => {
  // Rest of your login route code...
  console.log("successful" + "i was running");
  const {
    name,
    time_slot,
    address,
    email,
    locality,
    pincode,
    contact_no,
    date,
  } = req.body;
  console.log(req.body);
  const detailUser = new details({
    name,
    address,
    email,
    locality,
    pincode,
    contact_no,
    date,
    time_slot,
  });

  try {
    const adde_details = await detailUser.save();
    console.log("item succesfully saved");
    return res.redirect("/Payment HTML.html");
    // navigate to payment page
  } catch (error) {
    console.log(error);
    res.json({ message: "error occured" });
  }
};

module.exports = { adde_details };
