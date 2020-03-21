const firstStepForm = {
  title: "Подать заявку",
  btn: "Далее",
  form: [
    {
      name: "name",
      type: "text",
      placeholder: "Введите имя и фамилию",
      label: "Имя",
      logo: "img/requestForm/profile-logo.png"
    },
    {
      name: "phone",
      type: "phone",
      placeholder: "Введите номер телефона",
      label: "Номер телефона",
      logo: "img/requestForm/phone-logo.png"
    },
    {
      name: "workout",
      type: "select",
      placeholder: "Выбрать тип тренировки",
      logo: "img/requestForm/dumbbell.png",
      options: ["Домашние тренировки", "Тренирвоки в зале"]
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
      label: "Нога(ляшка)",
      minValue: 30,
      maxValue: 80
    },
    {
      name: "arm",
      measure: "cm",
      label: "Рука(бицепс)",
      minValue: 20,
      maxValue: 60
    },
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

export const formSchema = [firstStepForm, secondStepForm, thirdStepForm];
