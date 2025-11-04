import { I18n } from "i18n-js";

const translations = {
  en: {
    app: {
      name: "Campus Companion",
      tagline: "Track classes, assignments, and faculty notes in one place.",
    },
    languageSelection: {
      title: "Choose your language",
      subtitle: "Start by selecting the language for your campus portal.",
      continue: "Continue to login",
    },
    login: {
      title: "Welcome to Campus Companion",
      subtitle: "Sign in to review your semester overview.",
      emailLabel: "Institutional email",
      passwordLabel: "Password",
      action: "Enter campus",
      hint: "You can use any credentials to continue.",
      fallbackName: "Student",
      changeLanguage: "Change language",
    },
    navigation: {
      overview: "Overview",
      courses: "Courses",
      settings: "Settings",
    },
    overview: {
      greeting: "Welcome back, %{name}!",
      message: "Here is what requires your attention today.",
      quickStats: {
        title: "Summary",
        stats: [
          { id: "courses", label: "Active courses", value: "3" },
          { id: "activities", label: "Pending activities", value: "5" },
          { id: "quizzes", label: "Scheduled quizzes", value: "2" },
        ],
      },
      nextUp: {
        title: "Upcoming to-dos",
        empty: "No pending tasks. Enjoy your day!",
        items: [
          {
            id: "quiz",
            title: "Research methods quiz",
            course: "Data Science Lab",
            due: "Due Friday at 11:00 AM",
          },
          {
            id: "assignment",
            title: "Sprint retrospective report",
            course: "Software Engineering II",
            due: "Due Saturday at 9:00 PM",
          },
          {
            id: "reading",
            title: "Critical reading discussion post",
            course: "Global Humanities",
            due: "Due Sunday at 5:00 PM",
          },
        ],
      },
      notifications: {
        title: "Faculty notes",
        items: [
          {
            id: "note1",
            course: "Software Engineering II",
            message:
              "Professor Navarro uploaded the rubric for Project Iteration 2.",
          },
          {
            id: "note2",
            course: "Data Science Lab",
            message: "Lab session on Wednesday will focus on data cleaning.",
          },
          {
            id: "note3",
            course: "Global Humanities",
            message:
              "Reminder: bring printed sources for the comparative essay workshop.",
          },
        ],
      },
    },
    courses: {
      title: "Enrolled courses",
      subtitle: "This week at a glance.",
      labels: {
        activities: "Activities",
        quizzes: "Quizzes",
        notifications: "Announcements",
      },
      list: {
        softwareEngineering: {
          name: "Software Engineering II",
          code: "CS-320",
          instructor: "Prof. Alicia Navarro",
          summary: "Agile practices and delivery pipelines.",
          activities: [
            "Sprint retrospective report - due Apr 12",
            "Update backlog for sprint 4",
          ],
          quizzes: ["Module 3 checkpoint - opens Apr 10"],
          notifications: ["Project lab moved to Room 204 on Thursday"],
        },
        dataScience: {
          name: "Data Science Lab",
          code: "DS-245",
          instructor: "Dr. Tomas Ribeiro",
          summary: "Applied machine learning projects.",
          activities: [
            "Clean dataset submission - due Apr 11",
            "Peer review feedback for project teams",
          ],
          quizzes: ["Research methods quiz - Apr 11 at 11:00 AM"],
          notifications: ["Upload Jupyter notebooks before Thursday midnight"],
        },
        humanities: {
          name: "Global Humanities",
          code: "GH-110",
          instructor: "Dr. Laura Medina",
          summary: "Intercultural perspectives and analysis.",
          activities: [
            "Critical reading discussion post - due Apr 13",
            "Outline for comparative essay",
          ],
          quizzes: ["Reading check quiz opens Apr 14"],
          notifications: ["Guest lecture on Monday in Auditorium B"],
        },
      },
    },
    settings: {
      title: "Settings",
      subtitle: "Personalize your experience and preferences.",
      language: {
        title: "Language",
        description: "Select the language used across the portal.",
      },
      notifications: {
        title: "Notifications",
        summary: "Stay updated with course announcements.",
      },
      help: {
        title: "Quick links",
        items: ["Contact help desk", "Academic calendar", "Privacy notice"],
      },
      logout: "Log out",
    },
    actions: {
      continue: "Continue",
      save: "Save changes",
      back: "Back",
    },
  },
  es: {
    app: {
      name: "Campus Companion",
      tagline: "Gestiona tus clases, actividades y avisos en un solo lugar.",
    },
    languageSelection: {
      title: "Selecciona tu idioma",
      subtitle: "Comienza eligiendo el idioma para tu portal universitario.",
      continue: "Continuar al inicio de sesión",
    },
    login: {
      title: "Bienvenido a Campus Companion",
      subtitle: "Inicia sesión para revisar tu resumen del semestre.",
      emailLabel: "Correo institucional",
      passwordLabel: "Contraseña",
      action: "Entrar al campus",
      hint: "Puedes usar cualquier usuario y contraseña para continuar.",
      fallbackName: "Estudiante",
      changeLanguage: "Cambiar idioma",
    },
    navigation: {
      overview: "Resumen",
      courses: "Materias",
      settings: "Ajustes",
    },
    overview: {
      greeting: "¡Bienvenido de nuevo, %{name}!",
      message: "Esto es lo que requiere tu atención hoy.",
      quickStats: {
        title: "Resumen",
        stats: [
          { id: "courses", label: "Materias activas", value: "3" },
          { id: "activities", label: "Actividades pendientes", value: "5" },
          { id: "quizzes", label: "Quices programados", value: "2" },
        ],
      },
      nextUp: {
        title: "Próximas tareas",
        empty: "No tienes pendientes. ¡Disfruta tu día!",
        items: [
          {
            id: "quiz",
            title: "Quiz de métodos de investigación",
            course: "Laboratorio de ciencia de datos",
            due: "Entrega el viernes a las 11:00 a. m.",
          },
          {
            id: "assignment",
            title: "Informe de retrospectiva del sprint",
            course: "Ingeniería de software II",
            due: "Entrega el sábado a las 9:00 p. m.",
          },
          {
            id: "reading",
            title: "Publicación sobre lectura crítica",
            course: "Humanidades globales",
            due: "Entrega el domingo a las 5:00 p. m.",
          },
        ],
      },
      notifications: {
        title: "Notas del profesorado",
        items: [
          {
            id: "note1",
            course: "Ingeniería de software II",
            message:
              "La profesora Navarro subió la rúbrica para el Iteración 2 del proyecto.",
          },
          {
            id: "note2",
            course: "Laboratorio de ciencia de datos",
            message:
              "La sesión del miércoles se enfocará en limpieza de datos.",
          },
          {
            id: "note3",
            course: "Humanidades globales",
            message:
              "Recuerda llevar fuentes impresas para el taller del ensayo comparativo.",
          },
        ],
      },
    },
    courses: {
      title: "Materias inscritas",
      subtitle: "Tu semana de un vistazo.",
      labels: {
        activities: "Actividades",
        quizzes: "Quices",
        notifications: "Avisos",
      },
      list: {
        softwareEngineering: {
          name: "Ingeniería de software II",
          code: "CS-320",
          instructor: "Prof. Alicia Navarro",
          summary: "Prácticas ágiles y despliegue continuo.",
          activities: [
            "Informe de retrospectiva - vence 12 de abr.",
            "Actualizar backlog para el sprint 4",
          ],
          quizzes: ["Quiz del módulo 3 - se habilita 10 de abr."],
          notifications: ["El laboratorio se traslada al salón 204 el jueves"],
        },
        dataScience: {
          name: "Laboratorio de ciencia de datos",
          code: "DS-245",
          instructor: "Dr. Tomás Ribeiro",
          summary: "Proyectos de aprendizaje automático aplicado.",
          activities: [
            "Entrega del conjunto de datos limpio - vence 11 de abr.",
            "Retroalimentación entre pares para equipos de proyecto",
          ],
          quizzes: [
            "Quiz de métodos de investigación - 11 de abr. a las 11:00 a. m.",
          ],
          notifications: [
            "Sube cuadernos de Jupyter antes del jueves a medianoche",
          ],
        },
        humanities: {
          name: "Humanidades globales",
          code: "GH-110",
          instructor: "Dra. Laura Medina",
          summary: "Perspectivas interculturales y análisis.",
          activities: [
            "Publicación de lectura crítica - vence 13 de abr.",
            "Esquema para ensayo comparativo",
          ],
          quizzes: ["Quiz de lectura se abre 14 de abr."],
          notifications: ["Conferencia invitada el lunes en el auditorio B"],
        },
      },
    },
    settings: {
      title: "Ajustes",
      subtitle: "Personaliza tu experiencia y tus preferencias.",
      language: {
        title: "Idioma",
        description: "Selecciona el idioma que se usa en el portal.",
      },
      notifications: {
        title: "Notificaciones",
        summary: "Mantente al día con los avisos de tus materias.",
      },
      help: {
        title: "Enlaces rápidos",
        items: [
          "Contactar mesa de ayuda",
          "Calendario académico",
          "Aviso de privacidad",
        ],
      },
      logout: "Cerrar sesión",
    },
    actions: {
      continue: "Continuar",
      save: "Guardar cambios",
      back: "Volver",
    },
  },
  pt: {
    app: {
      name: "Campus Companion",
      tagline: "Gerencie suas aulas, atividades e avisos em um só lugar.",
    },
    languageSelection: {
      title: "Escolha seu idioma",
      subtitle: "Comece selecionando o idioma do portal acadêmico.",
      continue: "Continuar para o login",
    },
    login: {
      title: "Bem-vindo ao Campus Companion",
      subtitle: "Faça login para revisar o panorama do semestre.",
      emailLabel: "E-mail institucional",
      passwordLabel: "Senha",
      action: "Entrar no campus",
      hint: "Você pode usar qualquer usuário e senha para continuar.",
      fallbackName: "Estudante",
      changeLanguage: "Alterar idioma",
    },
    navigation: {
      overview: "Visão geral",
      courses: "Disciplinas",
      settings: "Configurações",
    },
    overview: {
      greeting: "Bem-vindo de volta, %{name}!",
      message: "Veja o que exige atenção hoje.",
      quickStats: {
        title: "Resumo",
        stats: [
          { id: "courses", label: "Disciplinas ativas", value: "3" },
          { id: "activities", label: "Atividades pendentes", value: "5" },
          { id: "quizzes", label: "Quizzes agendados", value: "2" },
        ],
      },
      nextUp: {
        title: "Próximas tarefas",
        empty: "Nenhum pendente. Aproveite o dia!",
        items: [
          {
            id: "quiz",
            title: "Quiz de métodos de pesquisa",
            course: "Laboratório de ciência de dados",
            due: "Entrega na sexta às 11h",
          },
          {
            id: "assignment",
            title: "Relatório da retrospectiva do sprint",
            course: "Engenharia de software II",
            due: "Entrega no sábado às 21h",
          },
          {
            id: "reading",
            title: "Postagem de leitura crítica",
            course: "Humanidades globais",
            due: "Entrega no domingo às 17h",
          },
        ],
      },
      notifications: {
        title: "Avisos do corpo docente",
        items: [
          {
            id: "note1",
            course: "Engenharia de software II",
            message:
              "A professora Navarro enviou a rubrica da Iteração 2 do projeto.",
          },
          {
            id: "note2",
            course: "Laboratório de ciência de dados",
            message: "A aula de quarta-feira será dedicada à limpeza de dados.",
          },
          {
            id: "note3",
            course: "Humanidades globais",
            message:
              "Lembre-se de levar fontes impressas para o workshop do ensaio comparativo.",
          },
        ],
      },
    },
    courses: {
      title: "Disciplinas matriculadas",
      subtitle: "Sua semana em destaque.",
      labels: {
        activities: "Atividades",
        quizzes: "Quizzes",
        notifications: "Avisos",
      },
      list: {
        softwareEngineering: {
          name: "Engenharia de software II",
          code: "CS-320",
          instructor: "Profa. Alicia Navarro",
          summary: "Práticas ágeis e entregas contínuas.",
          activities: [
            "Relatório da retrospectiva - entrega 12 de abr.",
            "Atualizar backlog para o sprint 4",
          ],
          quizzes: ["Checkpoint do módulo 3 - abre 10 de abr."],
          notifications: [
            "Laboratório do projeto mudou para a sala 204 na quinta",
          ],
        },
        dataScience: {
          name: "Laboratório de ciência de dados",
          code: "DS-245",
          instructor: "Dr. Tomás Ribeiro",
          summary: "Projetos de aprendizado de máquina aplicado.",
          activities: [
            "Entrega do conjunto de dados limpo - 11 de abr.",
            "Feedback entre equipes do projeto",
          ],
          quizzes: ["Quiz de métodos de pesquisa - 11 de abr. às 11h"],
          notifications: [
            "Envie os notebooks Jupyter antes de quinta à meia-noite",
          ],
        },
        humanities: {
          name: "Humanidades globais",
          code: "GH-110",
          instructor: "Dra. Laura Medina",
          summary: "Perspectivas interculturais e análise.",
          activities: [
            "Postagem de leitura crítica - entrega 13 de abr.",
            "Roteiro para ensaio comparativo",
          ],
          quizzes: ["Quiz de leitura abre em 14 de abr."],
          notifications: ["Palestra convidada na segunda no Auditório B"],
        },
      },
    },
    settings: {
      title: "Configurações",
      subtitle: "Personalize sua experiência e preferências.",
      language: {
        title: "Idioma",
        description: "Selecione o idioma utilizado no portal.",
      },
      notifications: {
        title: "Notificações",
        summary: "Fique atualizado com os avisos das disciplinas.",
      },
      help: {
        title: "Atalhos",
        items: [
          "Contatar suporte",
          "Calendário acadêmico",
          "Aviso de privacidade",
        ],
      },
      logout: "Sair",
    },
    actions: {
      continue: "Continuar",
      save: "Salvar alterações",
      back: "Voltar",
    },
  },
};

export const supportedLocales = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

const fallbackLocale = "en";

export const i18n = new I18n(translations);
i18n.enableFallback = true;
i18n.defaultLocale = fallbackLocale;

export const getBestLocale = (deviceLocales) => {
  const supportedCodes = new Set(supportedLocales.map((entry) => entry.code));
  if (deviceLocales && deviceLocales.length > 0) {
    for (const locale of deviceLocales) {
      const tag = locale?.languageTag?.toLowerCase();
      if (tag) {
        const base = tag.split(/[-_]/)[0];
        if (base && supportedCodes.has(base)) {
          return base;
        }
      }
    }
    for (const locale of deviceLocales) {
      const code = locale?.languageCode?.toLowerCase();
      if (code && supportedCodes.has(code)) {
        return code;
      }
    }
  }
  return fallbackLocale;
};

export const setLocale = (code) => {
  const normalized = typeof code === "string" ? code.toLowerCase() : "";
  i18n.locale = supportedLocales.some((entry) => entry.code === normalized)
    ? normalized
    : fallbackLocale;
  return i18n.locale;
};
