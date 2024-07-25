import { configDotenv } from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";

configDotenv();
// Configure API key authorization: api-key
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
let partnerKey = defaultClient.authentications["partner-key"];
partnerKey.apiKey = process.env.API_KEY;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

let apiInstance = new SibApiV3Sdk.ContactsApi();

let opts = {
  limit: 50, // Number | Number of documents per page
  offset: 0, // Number | Index of the first document of the page
  // modifiedSince: "modifiedSince_example", // String | Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
  sort: "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
};
apiInstance.getContacts(opts).then(
  function (data) {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  function (error) {
    console.error(error);
  }
);

console.log("hola");
