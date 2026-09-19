export const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      SocialLinks: {
        twitter: "Twitter",
        GitHub: "GitHub",
        Linkedin: "Linkedin",
      },
      skills: {
        React: "React",
        JavaScript: "Java Script",
        CSS: "CSS",
        NextJS: "Next.JS",
        Laravel: "Laravel",
        TypeScript: "Type Script",
        Html: "Html",
        Tailwindcss: "Tailwindcss",
        GitHub: "GitHub",
        Redux: "Redux",
      },
      title: "Mohammad Mohammadi",
      home: {
        title: "Welcome to My Portfolio",
        intro:
          "Hi, I'm Mohammad Mohammadi, a passionate web developer specializing in modern web technologies like JavaScript, Next.js, React.js, TypeScript, and Tailwind CSS. I build responsive, user-friendly applications that make an impact.",
        learnMore: "Learn More About Me",
        viewProjects: "View My Projects",
        expertise: "My Expertise",
        frontend: "Frontend Development",
        fullstack: "Full-Stack Solutions",
      },
      about: {
        title: "About Me",
        description:
          "I'm Mohammad Mohammadi, a dedicated web developer with over 2 years of experience in building scalable and user-friendly web applications. My passion lies in creating seamless digital experiences using modern technologies like Laravel, React, Next, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, GitHub and Redux. I thrive on solving complex problems and delivering high-quality solutions that meet user needs.",
        skills: "My Skills",
      },
      projects: {
        title: "Projects",
        view: "View on GitHub",
        restaurantTitle: "Online Restaurant",
        restaurantDescription:
          "A full-featured online Restaurant built with React, TypeScript, and Tailwind CSS.",
        portfolioTitle: "Portfolio Website",
        portfolioDescription:
          "A personal portfolio showcasing my work, built with React and Tailwind CSS.",
      },
      contact: {
        title: "Contact",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        name: "Name",
        emailField: "Email",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        failed: "Failed to send message: ",
      },
      footer: {
        navigation: "Navigation",
        follow: "Follow Me",
        contactInfo: "Contact Info",
        email: "Email",
        phone: "Phone",
        rights: "All rights reserved.",
        built: "Built with Next.js, TypeScript, and Tailwind CSS",
      },
      language: { english: "English", persian: "فارسی" },
      theme: { light: "Light mode", dark: "Dark mode" },
    },
  },
  fa: {
    translation: {
      nav: {
        home: "خانه",
        about: "درباره من",
        projects: "پروژه‌ها",
        contact: "تماس با من",
      },
      title: "محمد محمدی",
      SocialLinks: {
        twitter: "تویتر",
        GitHub: "گیت هاب",
        Linkedin: "لینک دین",
      },
      skills: {
        React: "ریکت",
        JavaScript: "جاوا اسکریپت",
        CSS: "سی ایس ایس",
        NextJS: "نیکست جی ایس",
        Laravel: "لاراویل",
        TypeScript: "تایپت اسکریپت",
        Html: "ایج تی ایم ایل",
        Tailwindcss: "تیل ویند سی ایس ایس",
        GitHub: "گیت هاب",
        Redux: "ریدکس",
      },
      home: {
        title: "به پورتفولیوی من خوش آمدید",
        intro:
          "سلام، من محمد محمدی هستم؛ یک توسعه‌دهنده وب علاقه‌مند که در تکنولوژی‌های مدرن وب مانند JavaScript، Next.js، React.js، TypeScript و Tailwind CSS فعالیت می‌کنم. من برنامه‌های واکنش‌گرا و کاربرپسند می‌سازم که تأثیرگذار باشند.",
        learnMore: "بیشتر درباره من",
        viewProjects: "مشاهده پروژه‌های من",
        expertise: "تخصص‌های من",
        frontend: "توسعه فرانت‌اند",
        fullstack: "راهکارهای فول‌استک",
      },
      about: {
        title: "درباره من",
        description:
          "من محمد محمدی هستم، یک توسعه‌دهنده وب متعهد با بیش از ۲ سال تجربه در ساخت برنامه‌های وب مقیاس‌پذیر و کاربرپسند. علاقه من ساخت تجربه‌های دیجیتال روان با تکنولوژی‌هایی مانند Laravel، React، Next، TypeScript، JavaScript، HTML، CSS، Tailwind CSS، GitHub و Redux است. از حل مشکلات پیچیده و ارائه راهکارهای باکیفیت که نیازهای کاربران را برآورده کنند لذت می‌برم.",
        skills: "مهارت‌های من",
      },
      projects: {
        title: "پروژه‌ها",
        view: "مشاهده در GitHub",
        restaurantTitle: "رستوران آنلاین",
        restaurantDescription:
          "یک رستوران آنلاین کامل که با React، TypeScript و Tailwind CSS ساخته شده است.",
        portfolioTitle: "وب‌سایت پورتفولیو",
        portfolioDescription:
          "یک پورتفولیوی شخصی برای نمایش کارها که با React و Tailwind CSS ساخته شده است.",
      },
      contact: {
        title: "تماس با من",
        email: "ایمیل",
        linkedin: "لینکدین",
        github: "گیت‌هاب",
        name: "نام",
        emailField: "ایمیل",
        message: "پیام",
        send: "ارسال پیام",
        success: "پیام با موفقیت ارسال شد!",
        failed: "ارسال پیام ناموفق بود: ",
      },
      footer: {
        navigation: "ناوبری",
        follow: "دنبال کردن من",
        contactInfo: "اطلاعات تماس",
        email: "ایمیل",
        phone: "شماره تماس",
        rights: "تمامی حقوق محفوظ است.",
        built: "ساخته شده با Next.js، TypeScript و Tailwind CSS",
      },
      language: { english: "English", persian: "فارسی" },
      theme: { light: "حالت روشن", dark: "حالت تاریک" },
    },
  },
} as const;

export type Language = keyof typeof resources;
