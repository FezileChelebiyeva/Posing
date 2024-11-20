import styles from "./ContactUsSection.module.scss";
import Button from "../../../shared/Button/MainButton";
import contact_icon1 from "../../../../assets/images/home/contact-us-section/icons/contact_icon_1.svg";
import contact_icon2 from "../../../../assets/images/home/contact-us-section/icons/contact_icon_2.svg";
import contact_icon3 from "../../../../assets/images/home/contact-us-section/icons/contact_icon_3.svg";
import ScrollAnimation from "../../../shared/Animations/ScrollAnimation/ScrollAnimation";
const ContactUsSection = () => {
  return (
    <section id="contact_us" className={styles.contact_us_section_all}>
      <div className="container">
        <div className={styles.contact_us_section}>
          <div className={styles.contact_details}>
            <div className={styles.section_head}>
              <ScrollAnimation>
                <div>Contract Us</div>
              </ScrollAnimation>
              <h1 className={styles.section_title}>
                If you have any quiries, fill free to contact us
              </h1>
              <p className={styles.contact_text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                simply dummy text of the printing and typesetting.
              </p>
            </div>
            <div className={styles.detail_infos}>
              <div className={styles.div}>
                <div className={styles.contact_kinds_info}>
                  <div>
                    <img src={contact_icon1} alt="contact-icon" />
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>4117 Leroy LaneHarold, KY 41635,</p>
                  </div>
                </div>

                <div className={styles.contact_kinds_info}>
                  <div>
                    <img src={contact_icon2} alt="contact-icon" />
                  </div>
                  <div>
                    <h3>Contract Number</h3>
                    <p>+606-243-4966</p>
                  </div>
                </div>

                <div className={styles.contact_kinds_info}>
                  <div>
                    <img src={contact_icon3} alt="contact-icon" />
                  </div>
                  <div>
                    <h3> Email Address</h3>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form_section}>
            <form action="" className={styles.form}>
              <h3 className={styles.form_title}>Please fill up the form</h3>
              <div className={styles.input_control}>
                <input type="text" name="" id="" placeholder="Name" required />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email address"
                  required
                />
              </div>
              <div className={styles.input_control}>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className={styles.input_control}>
                <textarea
                  name=""
                  id=""
                  placeholder="Write your massage"
                  required
                />
              </div>
              <div className={styles.form_btn}>
                <Button text="Send Message" type="submit"></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
