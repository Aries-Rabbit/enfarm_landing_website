import React from "react";
import style from "../assets/styles/contact.module.css";
import Swal from "sweetalert2";
interface InputProps {
  label: string;
  mark?: string;
}
const Contact = () => {
  const Input = ({ label, mark }: InputProps) => {
    return (
      <div className={style.form}>
        <div className={style.label}>
          {label}
          <span>{mark}</span>
        </div>
        <input type="text" />
      </div>
    );
  };
  const handleSubmit = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ với bạn trong thời gian sớm nhất",
      showConfirmButton: true,
      // timer: 1500,
      confirmButtonColor: "#306B1B",
    });
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
            <Input label="Tên" mark=" *" />
            <div className="flex sm:flex-col gap-3">
              <div className="w-1/2 sm:w-full">
                <Input label="Email" />
              </div>
              <div className="w-1/2 sm:w-full">
                <Input label="Số điện thoại" mark=" *" />
              </div>
            </div>
            <div className={style.form}>
              <div className={style.label}>
                <div>
                  Nội dung liên hệ<span> *</span>
                </div>
              </div>
              <textarea rows={5} />
            </div>
            <div className="w-full flex justify-center items-center">
              <button onClick={handleSubmit}>Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
