import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      lang: "Türkçe",
      name: "esra",
      heroMain: "I am a Frontend",
      heroTitle: "Devoloper...",
      heroText1: "...who likes to craft solid and scable frontend",
      heroText2: "products with great user experiences.",
      github: "Github",
      linkedin: "Linkedin",

      skills: "Skills",
      profile: "Profile",
      information: "Basic Information",
      date: "Date of birth",
      birthDate: "30.10.1994",
      hometown: "Yalova",
      residence: "Residence",
      education: "Education",
      uni: "Dokuz Eylül Unv.",
      uni1: "Math Licence",
      role1: "Preferred Role",
      role2: " Frontend, UI",
      about: "About Me",
      abouttext:
        "I possess technical skills such as website creation, updating, and database management, along with soft skills competencies like effective communication, teamwork, adaptability and motivation.",
      project: "Projects",
      pizza:
        "This project is a web application developed for users to order pizza. The project attracts attention with its user-friendly interface and customized options. I used modern web development technologies while developing this project. Our pizza ordering system offers an aesthetic platform. It is also optimized for all mobile devices.",
      view: "View Site",
      watch:
        "A website using modern technologies where users can add their favorite movies to the list and remove them from the list if they wish.",
      reactL: "react",
      reduxL: "redux",
      vercel: "vercel",

      footer: "Send me a message!",
      footerText: "Got a question or proposal, or just want ",
      footerText1: "to say hello? Go ahead.",
      mail: " esracarturk.77@gmail.com",
    },
  },
  tr: {
    translation: {
      lang: "İngilizce",
      name: "esra",
      heroMain: "Ben bir Frontend",
      heroTitle: "geliştiricisiyim...",
      heroText1: "sağlam ve ölçeklenebilir Frontend ürünleri harika",
      heroText2: "kullanıcı deneyimleriyle oluşturmayı seven",
      github: "Github",
      linkedin: "Linkedin",

      skills: "YETENEK",
      profile: "PROFİL",
      information: "Temel Bilgiler",
      date: "Doğum Tarihi",
      birthDate: "30.10.1994",
      hometown: "Yalova",
      residence: "İkamet Şehri",
      education: "Eğitim Durumu",
      uni: "Dokuz Eylül Üniv.",
      uni1: "Matematik Lisans",
      role1: "Tercih Ettiği Rol",
      role2: " Frontend, Arayüz",
      about: "Hakkımda",
      abouttext:
        "Web sitesi oluşturma, güncelleme, veritabanı yönetimi gibi teknik becerilerimle birlikte etkili iletişim, takım çalışması, uyum ve motivasyon gibi soft skills yeterliliklere  sahibim.",
      project: "Projelerim",
      pizza:
        "Bu proje kullanıcıların pizza siparişi verebilmeleri için geliştirilmiş bir web uygulamasıdır. Proje, kullanıcı dostu arayüzü ve özelleştirilmiş seçenekler ile dikkat çekmektedir. Bu projeyi geliştirirken modern web geliştirme teknolojilerini kullandım. Pizza sipariş sistemimiz estetik bir platform sunmaktadır. Bütün mobil cihazlar için de optimize edilmiştir.",
      view: "Siteyi Görüntüle",
      watch:
        "Kullanıcıların favori filmlerini arasından ekleyebileceği listede görebileceği ve isteğe göre listeden kaldırabileceği modern teknolojilerin kullanıldığı bir web sitesi. ",

      reactL: "react",
      reduxL: "redux",
      vercel: "vercel",
      footer: "Bana mesaj gönder!",
      footerText: "Bir sorum veya önerim var ya da",
      footerText1: "sadece merhaba demek istiyorum.",
      mail: " esracarturk.77@gmail.com",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
