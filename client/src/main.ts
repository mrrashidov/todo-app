import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "./style/styles.css";

const messages = {
  en: {
    message: {
      hello: "hello world",
      general: "General",
      language: "Languages",
      setting: "Settings",
      search: "Search",
      cancel: "Cancel",
      update: "Update",
      name: "Name",
      description: "Description",
      price: "Price",
      status: "Status",
      addTask: "Add Task",
      taskUpdate: "Edit",
      taskDelete: "Delete",
      inbox: "Inbox",
      today: "Today",
      upComing: "Upcoming",
      sort: "Sort",
    },
    pages: {
      home: "Home",
      todos: "Tasks",
      about: "About",
    },
    buttons: {
      addTask: "Add Task",
    },
    loginPage: {
      header: "Login",
      email: "Email",
      password: "Password",
      registerButton: "Register",
      loginButton: "Login",
      AlreadyRegisterExist: "Have you already signed up?",
      goToRegisterPage: "Go to login page",
      privacyPolice:
        "By continuing with Google, Apple or Email, you agree to Todoist's Terms of Service and Privacy Policy.",
    },
    registerPage: {
      header: "Sign Up",
      email: "Email",
      password: "Password",
      name: "Name",
      surname: "Surname",
      verifyPassword: "Verify Password",
      registerButton: "Sign up",
      AlreadyRegisterExist: "Have you already signed up?",
      goToHomePage: "Go to home page",
      privacyPolice:
        "By continuing with Google, Apple or Email, you agree to Todoist's Terms of Service and Privacy Policy.",
    },
    inboxPage: {
      headerTop: "Inbox",
      addTask: "Add a task",
      updateTask: "Update task",
      sort: "Sort",
      views: "View",
      comments: "Comments",
      cancel: "Cancel",
      header: "Get a clear view of the day",
      text: "Your tasks due today will appear here.",
      textPlaceholder: "e.g., renew sports subscription every May 1 #Health",
      description: "Description",
    },
    leftBar: {
      labels: "Labels",
      groups: "Groups",
    },
    toggleTag: {
      header: "Add label",
      label: "Label name",
      color: "Label color",
      cancel: "Cancel",
      add: "Add",
      title: "Click to find out about labels and how to use them.",
    },
    todayPage: {
      today: "Today",
      dt: "Tue 19 Oct",
      addTask: "Add a task",
      sort: "Sort",
      views: "View",
      comments: "Comments",
      cancel: "Cancel",
      header: "Get a clear view of the day",
      text: "Your tasks due today will appear here.",
      textPlaceholder: "e.g., renew sports subscription every May 1 #Health",
      description: "Description",
    },
  },
  tr: {
    message: {
      hello: "merhaba d??nya",
      general: "Genel",
      language: "Diller",
      setting: "Ayarlar",
      search: "Ara",
      cancel: "??ptal",
      update: "G??ncelle",
      name: "??sim",
      description: "A????klama",
      price: "Miktar",
      status: "Stat??",
      addTask: "G??rev Ekle",
      taskUpdate: "D??zenle",
      taskDelete: "Sil",
      inbox: "Klas??r",
      today: "Bug??n",
      upComing: "Yakla??an",
      sort: "S??rala",
    },
    pages: {
      home: "Anasayfa",
      todos: "G??revler",
      about: "Hakk??nda",
    },
    buttons: {
      addTask: "G??rev Ekle",
    },
    loginPage: {
      header: "Giri??",
      email: "E-posta",
      password: "Parola",
      registerButton: "??ye Ol",
      loginButton: "Giri?? Yap",
      AlreadyRegisterExist: "Hala Kay??t olmad??n m???",
      goToRegisterPage: "??ye Ol sayfas??na git",
      privacyPolice:
        "E-posta ile devam ederek, Todo App'in Hizmet Kullan??m Ko??ullar?? ve Gizlilik Politikas??n?? kabul etmi?? olursun.",
    },
    registerPage: {
      header: "Kaydol",
      email: "E-posta",
      password: "Parola",
      name: "??sim",
      surname: "Soyisim",
      verifyPassword: "Parola Do??rula",
      registerButton: "Kaydol",
      AlreadyRegisterExist: "Zaten kay??t oldun mu?",
      goToHomePage: "Giri?? sayfas??na git",
      privacyPolice:
        "E-posta ile devam ederek, Todo App'in Hizmet Kullan??m Ko??ullar?? ve Gizlilik Politikas??n?? kabul etmi?? olursun.",
    },
    inboxPage: {
      headerTop: "Klas??r",
      dt: "Sal 19 Oct",
      addTask: "G??rev ekle",
      updateTask: "G??rev g??ncelle",
      sort: "S??rala",
      views: "G??r??nt??le",
      comments: "Yorumlar",
      cancel: "??ptal",
      header: "G??n??n net bir g??r??n??m??n?? edin",
      text: "Biti?? tarihi bug??n olan g??revlerin burada g??z??kecek.",
      textPlaceholder: "??r., Her 1 May??s'ta spor ??yeli??ini yenile #Sa??l??k",
      description: "A????klama",
    },
    leftBar: {
      labels: "Etiketler",
      groups: "Gruplar",
    },
    toggleTag: {
      header: "Etiket ekle",
      label: "Etiket ad??",
      color: "Etiket rengi",
      cancel: "??ptal",
      add: "Ekle",
      title: "Projeleri ve onlar?? nas??l kullanabilece??ini ????renmek i??in t??kla.",
    },
    todayPage: {
      today: "Bug??n",
      dt: "Tue 19 Oct",
      addTask: "G??rev ekle",
      sort: "S??rala",
      views: "G??r??nt??le",
      comments: "Yorumlar",
      cancel: "??ptal",
      header: "G??n??n net bir g??r??n??m??n?? edin",
      text: "Biti?? tarihi bug??n olan g??revlerin burada g??z??kecek.",
      textPlaceholder: "??r., Her 1 May??s'ta spor ??yeli??ini yenile #Sa??l??k",
      description: "A????klama",
    },
  },
};

const local = localStorage.getItem("local")
  ? localStorage.getItem("local")
  : "en";

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false,
  locale: `${local}`, // set locale
  fallbackLocale: "en", // set fallback locale
  globalInjection: true,
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

createApp(App).use(router).use(i18n).use(store).mount("#app");
