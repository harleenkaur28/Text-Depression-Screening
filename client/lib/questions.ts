export type QuestionType = "mcq" | "text";

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you been bothered by having little interest or pleasure in doing things?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 2,
    text: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 3,
    text: "Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 4,
    text: "Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 5,
    text: "Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 6,
    text: "Over the last 2 weeks, how often have you been bothered by feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 7,
    text: "Over the last 2 weeks, how often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 8,
    text: "Over the last 2 weeks, how often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 9,
    text: "Over the last 2 weeks, how often have you been bothered by thoughts that you would be better off dead or of hurting yourself in some way?",
    type: "mcq",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
];
