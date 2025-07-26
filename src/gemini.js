import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDi8CRSXvgSwsYPuZJ8iBd9Qj0jJPxqnTQ";

const genAI = new GoogleGenerativeAI(apiKey);

async function main(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = await response.text();

  // ✅ Only return the first 50 words
  const limitedText = text.split(" ").slice(0, 50).join(" ") + "...";

  return limitedText;
}

export default main;
