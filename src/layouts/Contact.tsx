import React, { useState } from "react";
import style from "../assets/styles/contact.module.css";
import Swal from "sweetalert2";
import { contactService } from "../services/contactService";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (name === "" || email === "" || phone === "" || message === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        text: "Vui lòng điền đầy đủ thông tin",
        showConfirmButton: true,
        confirmButtonColor: "#306B1B",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        text: "Email không đúng định dạng",
        showConfirmButton: true,
        confirmButtonColor: "#306B1B",
      });
      return;
    }
    setSending(true);
    await contactService.sendEmail({
      name: name,
      email: email,
      phone: phone,
      content: message,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ với bạn trong thời gian sớm nhất",
      showConfirmButton: true,
      confirmButtonColor: "#306B1B",
    });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSending(false);
  };

  return (
    <div className={style.container}>
      <div className="flex sm:flex-col">
        <div className="w-1/2 mt-16 sm:w-full">
          <h1>Kết nối với chúng tôi</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non.
          </p>
        </div>
        <div className="w-1/2 sm:w-full">
          <div className={style.container_form}>
            <div className={style.form}>
              <div className={style.label}>
                Tên
                <span> *</span>
              </div>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex sm:flex-col gap-3">
              <div className="w-1/2 sm:w-full">
                <div className={style.form}>
                  <div className={style.label}>
                    Email
                    <span> *</span>
                  </div>
                  <input
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    type="text"
                  />
                </div>
              </div>
              <div className="w-1/2 sm:w-full">
                <div className={style.form}>
                  <div className={style.label}>
                    Phone
                    <span> *</span>
                  </div>
                  <input
                    value={phone}
                    onChange={(event) => {
                      const numericValue = event.target.value.replace(
                        /\D/g,
                        ""
                      ); // Remove non-numeric characters
                      setPhone(numericValue);
                    }}
                    type="text"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
            <div className={style.form}>
              <div className={style.label}>
                <div>
                  Nội dung liên hệ<span> *</span>
                </div>
              </div>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <button disabled={sending} onClick={handleSubmit}>
                {sending ? "Đang gửi..." : "Gửi"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
