import { JSXElement, For } from "solid-js";

const skills = [
  {
    name: "Typescript",
    level: 100,
    color: "bg-blue-500",
    text: "Certified Wizard",
  },
  {
    name: "React",
    level: 100,
    color: "bg-cyan-500",
    text: "Wizard",
  },
  {
    name: "Rust",
    level: 60,
    color: "bg-orange-500",
    text: "Getting rusty",
  },
  {
    name: "Solid",
    level: 80,
    color: "bg-blue-500",
    text: "Wizard",
  },
  {
    name: "Python",
    level: 100,
    color: "bg-yellow-500",
    text: "Pythonista",
  },
  {
    name: "Elixir",
    level: 70,
    color: "bg-purple-500",
    text: "",
  },
  {
    name: "Ruby",
    level: 80,
    color: "bg-red-500",
  },
  {
    name: "Java",
    level: 60,
    color: "bg-yellow-500",
  },
  {
    name: "C#",
    level: 60,
    color: "bg-blue-500",
  },
  {
    name: "C",
    level: 70,
    color: "bg-blue-500",
  },
  {
    name: "Assembly",
    level: 70,
    color: "bg-blue-500",
  },
  {
    name: "Brainfuck",
    level: 100,
    color: "bg-pink-500",
  },
]; //.sort((a, b) => b.level - a.level);
export default function Skills(): JSXElement {
  return (
    <div class="">
      <h1 class="text-4xl mb-4">Skills</h1>
      <div class="grid grid-cols-3 gap-6">
        <For each={skills}>
          {(skill) => (
            <div>
              <h2 class="text-xl">{skill.name}</h2>
              <div class="bg-neutral-200/10 h-8 rounded-md relative -z-10">
                <div class="absolute inset-0 flex justify-center items-center">
                  {skill.text}
                </div>
                <div
                  class={`h-full rounded-md ${skill.color}`}
                  style={`width: ${skill.level}%`}
                ></div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

function addNumbers(a: number, b: number): number {
  // If there is no carry, return the sum of a and b
  if ((a & b) == 0) return a ^ b;
  // Otherwise, add the carry and the result
  else return addNumbers((a & b) << 1, a ^ b);
}

// Q: What is the weather like today?
// A: It's sunny and 72 degrees.
// Q: Where are you from?
// A: I'm from the United States.
// Q: Where exactly?
// A: I'm from the state of California.
// Q: What city?
// A: I'm from the city of San Francisco.
// Q: What neighborhood?
// A: I'm from the neighborhood of the Mission District.
// Q: What street?
// A: I'm from the street of 16th Street.
// Q: What house?
// A: I'm from the house of 1234.
// Q: What room?
// A: I'm from the room of the living room.
// Q: What chair?
// A: I'm from the chair of the couch.
