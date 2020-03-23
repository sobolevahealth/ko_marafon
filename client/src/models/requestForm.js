const firstStepForm = {
  title: "Подать заявку",
  btn: "Далее",
  form: [
    {
      name: "name",
      type: "text",
      placeholder: "Введите имя и фамилию",
      logo: "img/requestForm/profile-logo.png",
      required: true
    },
    {
      name: "phone",
      type: "phone",
      placeholder: "Введите номер телефона",
      logo: "img/requestForm/phone-logo.png",
      required: true
    },
    {
      name: "workout",
      type: "select",
      placeholder: "Выбрать тип тренировки",
      logo: "img/requestForm/dumbbell.png",
      options: ["Домашние тренировки", "Тренировки в зале"]
    },
    {
      name: "effort",
      type: "select",
      placeholder: "Выбрать нагрузку",
      logo: "img/requestForm/biceps.png",
      options: [
        "Вводная неделя (1 неделя облегченная)",
        "Средняя нагрузка",
        "Не первый раз с нами (уже участвовали)"
      ]
    }
  ]
};

const secondStepForm = {
  title: "Исходные Параметры",
  btn: "Далее",
  form: [
    {
      name: "weight",
      measure: "kg",
      label: "Вес",
      minValue: 40,
      maxValue: 150
    },
    {
      name: "height",
      measure: "cm",
      label: "Рост",
      minValue: 140,
      maxValue: 200
    },
    {
      name: "leg",
      measure: "cm",
      label: "Нога(ляжка)",
      minValue: 30,
      maxValue: 80
    },
    {
      name: "arm",
      measure: "cm",
      label: "Рука(бицепс)",
      minValue: 20,
      maxValue: 60
    }
  ]
};

const thirdStepForm = {
  title: "Исходные Параметры",
  btn: "Далее",
  form: [
    {
      name: "waist",
      measure: "cm",
      label: "Талия",
      minValue: 50,
      maxValue: 150
    },
    {
      name: "hips",
      measure: "cm",
      label: "Бедра",
      minValue: 70,
      maxValue: 150
    },
    {
      name: "bust",
      measure: "cm",
      label: "Грудь",
      minValue: 60,
      maxValue: 160
    }
  ]
};

const fourthStepForm = {
  title: "Питание",
  btn: "Отправить",
  form: [
    {
      name: "milk",
      type: "checkbox",
      placeholder: "",
      label: "Лактоза"
    },
    {
      name: "meat",
      type: "checkbox",
      placeholder: "",
      label: "Мясо"
    },
    {
      name: "fish",
      type: "checkbox",
      placeholder: "",
      label: "Рыба"
    },
    {
      name: "bird",
      type: "checkbox",
      placeholder: "",
      label: "Птица"
    },
    {
      name: "gluten",
      type: "checkbox",
      placeholder: "",
      label: "Глютен"
    },
    {
      name: "egg",
      type: "checkbox",
      placeholder: "",
      label: "Яйца"
    },
    {
      name: "avocado",
      type: "checkbox",
      placeholder: "",
      label: "Авокадо"
    },
    {
      name: "nuts",
      type: "checkbox",
      placeholder: "",
      label: "Орехи"
    },
    {
      name: "beans",
      type: "checkbox",
      placeholder: "",
      label: "Бобы"
    },
    {
      name: "comments",
      type: "textarea",
      placeholder: "Введите дополнительную информацию и любые комментарии",
      logo: "img/requestForm/comment.png",
      required: true
    },
    {
      name: "agree",
      type: "checkbox",
      placeholder: "",
      label: "Согласен(на) на публикацию фотографий ДО/ПОСЛЕ в конце марафона"
    },
  ]
};

export const formSchema = [
  firstStepForm,
  secondStepForm,
  thirdStepForm,
  fourthStepForm
];
