import { https } from "./urlConfig";

export const contactService = {
  sendEmail: (data) => {
    let uri = "/email-sender";
    return https.post(uri, data);
  },
};
