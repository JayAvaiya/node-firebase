require("dotenv").config();
const { auth } = require("firebase-admin");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const user = require("../data/user");
const { getMessaging } = require("../firebase");
const userAuth = require("../jwt/userAuth");
const router = require("express").Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    const registrationToken = [
      "fTXPrT23Tv2xKj4cUfp5QT:APA91bGwYwN0vcE-DDfZFYHalNFWx0gdXNBXV6wS_wo8R-7Vtjui63Mqn0snA3DA0Gq1KwLDI10v30wWol9coKgBsytdkGAIx3i_SHiOggRgzGAcVbbJ_TKo4DUD7om5aqqKIpa8KiRy",
    ];

    const token =
      "AAAANKy5iuA:APA91bFum39-_forfH1D5-yimjpmke7C9v1mPyM1-1_tZ8Hz6I9fvEChoKqGps27mh2luSqn3JW5vxQGeRsgRdKgB5S5ENMVEmqeuRhW_OC41pIxbQi75LNO6vy_FgWjdFOV1E7XFhwd";
    const payload = {
      notification: {
        title: "OTP for Swiggy",
        body: "1234",
      },
      registration_ids: registrationToken,
    };

    const response = await axios.post("https://fcm.googleapis.com/fcm/send", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const response = await getMessaging().send(message);
    console.log(response, "Response from firebase");
    res.send("working");
  } catch (error) {
    res.send(error);
  }
});

router.get("/", (req, res) => {
  console.log(date);
  res.send("working api on /");
});

module.exports = router;
