import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const FAQs = [
    {
      id: 1,
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
    {
      id: 2,
      title: " این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند",
      caption:
        "هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند",
    },
    {
      id: 3,
      title:
        "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      caption:
        " با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },

    {
      id: 4,
      title: "این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی",
      caption:
        " خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم",
    },

    {
      id: 5,
      title: "این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
    {
      id: 6,
      title:
        "وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند ",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
    {
      id: 7,
      title: "  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، ",
    },
    {
      id: 8,
      title: " کوچک و کوچکتر شد صبح توی جعبه مداد رنگی",
      caption:" مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…"
    },
  ];
  const [active, setActive] = useState(0);

  const activeFAQHandler = (index) => {
    setActive(active === index ? 0 : index);
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 1 }}
        id="FAQ"
        className="bg-lightGreen1  py-16 "
      >
        <section className=" md:w-1/3 mx-auto ">
          <h2
            className="py-2 font-bold text-center text-3xl text-text-dark "
            style={{ fontFamily: "tanha" }}
          >
            سوالات متداول
          </h2>
          <h2
            className="py-2 w-full font-bold text-center text-1xl text-dark"
            style={{ fontFamily: "tanha" }}
          >
            {" "}
            بخشی از خدمات ارائه شده توسط شرکت ....{" "}
          </h2>
        </section>
        <div className="grid md:grid-cols-2 gap-4 px-4 md:gap-12 md:px-12 ">
          {FAQs.map((faq) => (
            <>
              {" "}
              <section
                className={
                  `bg-lightGreen3  justify-center md:justify-between p-1  relative dark:bg-[#0766AD]  cursor-pointer ` +
                  (active === faq.id ? " z-50" : "z-0")
                }
                onClick={() => {
                  activeFAQHandler(faq.id);
                }}
              >
                <div
                  className={
                    `w-full  flex justify-between p-1  bg-lightGreen1 dark:bg-dark dark:text-lightGreen1 relative z-10 ` +
                    (active === faq.id ? "" : "relative")
                  }
                >
                  <h2 className=" text-sm lg:text-base  "> {faq.title}</h2>

                  <motion.div animate={{ rotate: faq.id === active ? 180 : 0 }}>
                    <RiArrowDownSLine className="text-xl text-[#0766AD] dark:text-lightGreen1" />
                  </motion.div>
                </div>
                <motion.div
                  className="overflow-hidden absolute top-0 right-0 border-4  border-solid border-lightGreen3 dark:border-[#0766AD]   z-0"
                  animate={{ height: active === faq.id ? "auto" : 0 }}
                >
                  <p
                    className={`text-justify   text-sm md:text-base 	   w-full bg-lightGreen1     px-1 pt-10 pb-1 dark:border-[#0766AD] `}
                    style={{ lineHeight: "1.5rem" }}
                  >
                    {faq.caption}
                  </p>
                </motion.div>
              </section>
            </>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FAQ;
