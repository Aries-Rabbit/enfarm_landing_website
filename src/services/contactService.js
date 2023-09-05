import { http } from "./urlConfig";

export const contactService = {
  sendEmail: (data) => {
    let uri = "/email-sender";
    return http.post(uri, data);
  },
};
