const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()




const gemini = async (query, menus) => {
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.THANKS_AJIZ);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `tolong berikan saya data sesuai ${query} dari ${menus} .
    Response must a format JSON like this:
    [
    {
    "name": ...,
    "description": ...,
    "price": ...,
    "stock": ...,
    "imageUrl": ...
    }
    ].create without \`\`\` json and \`\`\`
    `
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = JSON.parse(text.trim())
    // console.log(text);

    return text
};
//     const { query } = req.body
//     try {
//         const menu = require('../data/menus.json')
//         async function run() {
//             // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//             const prompt = `${JSON.stringify(menu)} ${query}`

//             const result = await model.generateContent(prompt);
//             const response = await result.response;
//             const text = response.text();
//             text = JSON.parse(text)
//             console.log(text);
//         }

//         run();
//     } catch (error) {
//         console.log(error);

//     }
// }
module.exports = gemini