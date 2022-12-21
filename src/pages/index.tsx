import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Select from "react-select";

const Home: NextPage = () => {
  const [translationResponse, setTranslationResponse] = useState(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [text, setText] = useState("");
  const [from, setFrom] = useState("English");
  const [to, setTo] = useState("German");

  const getTranslation = () => {
    setIsLoading(true);
    axios
      .get(`/api/completion?from=${from}&to=${to}&text=${text}`)
      .then((res) => {
        setTranslationResponse(res.data);
        setIsLoading(false);
      });
  };
  const languages = [
    "Arabic",
    "Bengali",
    "Chinese",
    "Dutch",
    "English",
    "French",
    "German",
    "Greek",
    "Hindi",
    "Hungarian",
    "Indonesian",
    "Italian",
    "Japanese",
    "Korean",
    "Malay",
    "Norwegian",
    "Persian",
    "Polish",
    "Portuguese",
    "Romanian",
    "Russian",
    "Spanish",
    "Swahili",
    "Swedish",
    "Tamil",
    "Thai",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Vietnamese",
    "Welsh",
  ];

  return (
    <>
      <Head>
        <title>Lost In Translation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="max-w-screen flex min-h-screen flex-col items-center bg-[#EBE7E3]">
        <div className="flex h-full w-[900px] flex-col items-center border pt-16 pb-32">
          <h1 className="font-hand text-6xl font-bold">Lost In Translation</h1>
          <p className="font-hand text-2xl"> by: teo nys</p>

          <div className="mt-12 flex w-full items-center justify-center space-x-10 font-hand text-2xl">
            <div className="h-[100px] cursor-pointer">
              <a className="font-bold">Introduction</a>
              <img className="w-full" src={"/assets/underline.svg"} />
            </div>
            <div className="h-[100px] cursor-pointer hover:font-bold">
              <a href="#problem">The Problem </a>
            </div>

            <div className="h-[100px] cursor-pointer hover:font-bold">
              <a href="#llm">Large Language Models</a>
            </div>

            <div className="h-[100px] cursor-pointer hover:font-bold">
              <a href="#solution">A Solution</a>
            </div>

            <div className="h-[100px] cursor-pointer hover:font-bold">
              <a href="#demo">Interactive Demo</a>
            </div>

            <div className="h-[100px] cursor-pointer hover:font-bold">
              <a href="#conclusion">Conclusion</a>
            </div>
          </div>

          <div
            id="introduction"
            className="mt-16 flex w-full items-center space-x-4"
          >
            <h2 className="whitespace-nowrap font-hand text-3xl font-bold">
              1. Introduction
            </h2>
            <div className="h-[1px] w-full border-t-2 border-dashed border-gray-300">
              {""}
            </div>
          </div>
          <div className="mt-4 flex w-full items-center space-x-6">
            <img
              className="h-[400px] w-[350px]"
              src={"/assets/intro_image.png"}
            />
            <p className="font-libre leading-7">
              As I conversed with an old friend from Ukraine, I was struck by
              the sadness in her eyes as she told me about her grandfather's
              recent passing. Though we both spoke Russian, my language skills
              had unfortunately deteriorated over the years, and her English was
              not perfect either. Despite trying to console her, I struggled to
              find the right words in Russian. I knew exactly what I wanted to
              say in English - phrases like "Everything will be okay" or "I'm
              sorry to hear that; I know they are in a good place now" - but as
              I tried to translate these sentiments directly, I couldn't help
              feeling that the empathy and compassion I wanted to convey was
              getting lost in translation. All I could manage was a simple
              "прости" (sorry) and a weak "все будет хорошо" (everything will be
              okay). It was as if the emotion and sentiment I wanted to express
              were stuck in my head, unable to find their way out through my
              flawed Russian.
            </p>
          </div>
          <p className="mt-10 font-libre leading-7">
            I thought about this interaction a lot in the coming days. It was a
            familiar feeling I had not experienced in a long time. This a
            feeling that is shared amongst millions of people around the world
            living in countries that they might not call home. Where no matter
            how well put or perfectly chosen the story in your head is, the
            meaning is frequently … <strong>Lost In Translation</strong>
          </p>

          <div
            id="problem"
            className="mt-16 flex w-full items-center space-x-4"
          >
            <h2 className="whitespace-nowrap font-hand text-3xl font-bold">
              2. Problem
            </h2>
            <div className="h-[1px] w-full border-t-2 border-dashed border-gray-300">
              {""}
            </div>
          </div>

          <p className="mt-4 font-libre leading-7">
            In the United States, the increasing diversity of its population has
            made language translation a vital issue. According to the 2018
            census, 67.3 million people in the US spoke a language other than
            English at home – a number that has almost tripled since 1990. In a
            country that is becoming more diverse every day, it is important to
            find solutions that allow us to maintain our identity and culture
            while also enabling us to communicate effectively with people from
            different backgrounds.
          </p>
          <p className="mt-4 font-libre leading-7">
            In recent years, powerful tools like Google Translate have made
            translation more accessible to everyone. We can now translate any
            text or phrase from any language at the touch of a button, a task
            that would have required sifting through hundreds of pages of a
            translation book just a decade ago.
          </p>
          <p className="mt-4 font-libre leading-7">
            Translation is not just about having conversations with each other –
            it is essential in every aspect of life, from understanding bills,
            papers, and even your rights within a country. While we have made
            great strides in simplifying translation, current solutions still
            lack the intuition and perception of a human translator. While
            convenient for quickly translating text, verbatim translation
            services like Google Translate often fail to capture the nuance,
            context, and sentiment of the original language, leading to
            confusion and misunderstandings for non-English speakers. This can
            be particularly dangerous in situations where the accuracy of a
            translation is critical, such as with legal documents.
          </p>
          <div id="llm" className="mt-16 flex w-full items-center space-x-4">
            <h2 className="whitespace-nowrap font-hand text-3xl font-bold">
              3. Large Language Models
            </h2>
            <div className="h-[1px] w-full border-t-2 border-dashed border-gray-300">
              {""}
            </div>
          </div>
          <p className="mt-4 font-libre leading-7">
            Large Language Models have become exceptionally popular recently and
            have gained a sense of virality due to chat.openai.com or chatGPT.
            While some people draw comparisons between this and search engines
            like google, they are completely wrong. Large Language Models are
            like a person with an enormous amount of context and knowledge
            stored in their head. Using this context and knowledge, similar to
            how we build responses to prompts, it tries to predict and generate
            the most likely response. Because of this, It has the exceptional
            ability to have a pseudo sense of perception by using context as a
            foundation for responses. Because of this, it can provide
            translations that are contextually aware and do not lack context or
            nuance.
          </p>

          <div
            id="solution"
            className="mt-16 flex w-full items-center space-x-4"
          >
            <h2 className="whitespace-nowrap font-hand text-3xl font-bold">
              4. A Solution
            </h2>
            <div className="h-[1px] w-full border-t-2 border-dashed border-gray-300">
              {""}
            </div>
          </div>

          <p className="mt-4 w-full font-libre leading-7">
            {"For example, let's take a common English phrase:"}
          </p>
          <div className="mt-8 w-full border-2 border-dashed border-gray-400 bg-zinc-800/5 p-4">
            <p className="pt-4 font-libre text-xl leading-7">
              {`"I’m just trying to keep my head above water"`}
            </p>
            <p className="pb-4 font-libre italic leading-7 opacity-60">
              To avoid being consumed by a stressful or unpleasant situation
            </p>
          </div>
          <p className="mt-4 w-full font-libre leading-7">
            If we were to try and translate this to german using google
            translate, we would get.
          </p>

          <div className="mt-8 w-full border-2 border-dashed border-gray-400 bg-zinc-800/5 p-4">
            <p className="pt-4 font-libre text-xl leading-7">
              {`"Ich versuche nur meinen Kopf über Wasser zu halten."`}
            </p>
            <p className=" pb-4 font-libre italic leading-7 opacity-60">
              I’m just trying to keep my head above water
            </p>
          </div>
          <p className="mt-4 w-full font-libre leading-7">
            The literal translation is correct, but this phrase might be lost on
            a native german speaker unfamiliar with the meaning of the English
            phrase. Let’s try again, but this time, we will prompt an LLM
            (gpt-3) to provide us with a contextual translation of meaning and
            not words.
          </p>

          <div className="mt-8 w-full border-2 border-dashed border-gray-400 bg-zinc-800/5 p-4">
            <p className="pt-4 font-libre text-xl leading-7">
              {`"Ich versuche nur, meinen Kopf über Wasser zu halten. Das bedeutet, dass ich mich in einer schwierigen Situation befinde und versuche, meine Probleme zu bewältigen."`}
            </p>
            <p className=" pb-4 font-libre italic leading-7 opacity-60">
              {`I'm just trying to keep my head above water. This means that I am in a difficult situation, and I am trying to cope with my problems.`}
            </p>
          </div>
          <p className="mt-8 font-libre leading-7">
            As you can see, the contextually aware translation provides someone
            who is not familiar with the meaning of the original phrase
            significantly more information to understand what the other party is
            conveying. This is because LLMs can build a contextual understanding
            of a phrase, as opposed to just a word-to-word translation.
          </p>

          <div id="demo" className="mt-16 flex w-full items-center space-x-4">
            <h2 className="whitespace-nowrap font-hand text-3xl font-bold">
              5. Interactive Demo
            </h2>
            <div className="h-[1px] w-full border-t-2 border-dashed border-gray-300">
              {""}
            </div>
          </div>
          <p className="mt-8 font-libre leading-7">
            Below you can play around with a simple example of the application
            of LLM's for translation. It uses the gpt-3 api and some realitively
            naive prompt engineering to provide contexual translations for a
            basic set of languages.
          </p>
          <p className="mt-8 w-full font-libre italic leading-7 opacity-80">
            tip: if you want a good starting example, you can try the phrase{" "}
            <strong>"it's not you, it's me".</strong>
          </p>
          <div className="mt-8 w-full rounded-sm border border-2 border-gray-400 bg-zinc-800/5 p-4">
            <div className="flex w-full items-center space-x-4 font-libre">
              <p>From Language: </p>
              <Select
                isSearchable={true}
                onChange={(e) => setFrom(e.value)}
                value={{ value: from, label: from }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    background: "#EBE7E3",
                    ":focus": {
                      border: "1px solid black",
                    },
                  }),
                  menu: (base) => ({
                    ...base,
                    background: "#EBE7E3",
                  }),
                  option: (base, { isFocused, isSelected }) => ({
                    background: isFocused
                      ? "black"
                      : isSelected
                      ? "gray"
                      : "#EBE7E3",
                    color: isFocused || isSelected ? "#EBE7E3" : "black",
                  }),
                }}
                options={languages.map((language: string) => ({
                  value: language,
                  label: language,
                }))}
              />
              <p>To Language: </p>
              <Select
                value={{ value: to, label: to }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    background: "#EBE7E3",
                    ":focus": {
                      border: "1px solid black",
                    },
                  }),
                  menu: (base) => ({
                    ...base,
                    background: "#EBE7E3",
                  }),
                  option: (base, { isFocused, isSelected }) => ({
                    background: isFocused
                      ? "black"
                      : isSelected
                      ? "gray"
                      : "#EBE7E3",
                    color: isFocused || isSelected ? "#EBE7E3" : "black",
                  }),
                }}
                isSearchable={true}
                onChange={(e) => setTo(e.value)}
                options={languages.map((language: string) => ({
                  value: language,
                  label: language,
                }))}
              />
            </div>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="focus:ring-none block w-full resize-none border-0 bg-transparent py-3 font-libre focus:outline-0 focus:ring-0 sm:text-sm"
              placeholder="Add what you would like to translate"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex w-full justify-end p-2 font-libre">
              <button
                onClick={() => getTranslation()}
                className="border border-gray-800/50 px-4 py-2 hover:bg-gray-800 hover:text-[#EBE7E3]"
              >
                Translate
              </button>
            </div>
            <div className="mt-10 border-t border-dashed border-gray-500/50 py-4">
              {translationResponse || isLoading ? (
                <p className="font-libre">
                  {isLoading ? "Loading ..." : translationResponse}
                </p>
              ) : (
                <p className="font-libre opacity-50">
                  Translation response will apear here
                </p>
              )}
            </div>
          </div>
          <div
            id="conclusion"
            className="mt-16 flex w-full items-center space-x-4"
          >
            <h2 className="whitespace-nowrap font-hand text-3xl font-bold">
              6. Conclusion
            </h2>
            <div className="h-[1px] w-full border-t-2 border-dashed border-gray-300">
              {""}
            </div>
          </div>
          <p className="mt-8 font-libre leading-7">
            So, what is next? I hope to see new products and software aimed at
            helping break down communication barriers. And the applications of
            LLMs in the space of translation are vast; for example, here are
            some ideas about their applications that are currently not possible.
          </p>
          <p className="mt-8 pl-12 font-libre leading-7">
            - LLMs could provide translations of legal documents or bills and be
            given context into the situation of the person affected. A
            non-native English speaker could also use these tools to reference a
            similar law or concept from their native country.
          </p>
          <p className="mt-8 pl-12 font-libre leading-7">
            - Help translate and contextualize learning materials in educational
            contexts to different languages while translating culturally
            specific references and metaphors.
          </p>
          <p className="mt-12 font-libre leading-7">
            The various intersectionalities of countries around the world are
            growing. As they do, we can hopefully use these contextual aware
            models to communicate amongst ourselves that take each individual's
            environment, culture, race, and place of birth into account. And who
            knows, maybe someday in the future, there will be something to be
            ... <strong>Found in Translation</strong>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
