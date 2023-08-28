import React from "react";
import style from "../assets/styles/footer.module.css";
import logo_enfarm from "../assets/images/img/logo_enfarm.png";
import { FaceBookIcon, LinkedinIcon } from "../assets/images/svg/Icon";

interface ItemProps {
  title: string;
  href: string[];
}
const FooterItem = ({ title, href }: ItemProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className="flex flex-col gap-2 mt-5">
        {href.map((item, index) => (
          <a className="cursor-pointer" key={index}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer_info}>
        <div className="py-6 flex gap-16 sm:flex-col sm:gap-8">
          <div className="w-1/3 sm:w-full">
            <img src={logo_enfarm} className="w-[160px]" alt="logo_enfarm" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex gap-4 items-center mt-3">
              <FaceBookIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className="flex gap-32">
            <FooterItem title="About us" href={["For Investors", "Careers"]} />
            <FooterItem
              title="Products"
              href={["enFarm", "enGIS", "enGIA", "enData"]}
            />
          </div>
        </div>
      </div>
      <div className={style.footer_copyright}>
        <div className="flex sm:flex-col sm:gap-2">
          <p className="w-3/5 sm:w-full">
            © Ensightful Technology Company Limited
          </p>
          <div className="w-2/5 sm:w-full flex justify-between">
            <button>
              <p>Hotline 1900 6079</p>
            </button>
            <button>
              <p>hr@ensightful.co</p>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
