import type { Model } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    // 0-2
    title: "",
    saveSession: true,
    APITemperature: 0.6,
    continuousDialogue: true,
    APIModel: "gpt-3.5-turbo" as Model
  },
  CLIENT_DEFAULT_MESSAGE: `
- 用户量太大可能卡顿，如需更好的体验,👉[点这里获得独立账号 KEY 使用](https://sourl.cn/38eM4A)
- 支持多个对话，打开对话设置，点击新建对话。在输入框里输入 [[/]][[/]] 或者 [[空格]][[空格]] 可以切换对话，搜索历史消息。
- 基于 [OpenAI(gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 部署,提问前按下 [[空格]] 选择人物预设。出现 [[error]] 请点右下角清空对话。
- 用户交流群，欢迎来聊聊👉[QQ频道：Aivesa](https://sourl.cn/qpDRVf) 👉[TG群组](https://t.me/+gJ-GQFE1GN40NGJl) 
- 用 iPhone 试试这个👉[iOS 召唤 智能Siri Pro](https://github.com/ClarenceDan/chatGPT-Siri-Pro
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo": 4 * 1024,
    "gpt-4": 8 * 1024,
    "gpt-4-32k": 32 * 1024
  } as Record<Model, number>,
  OPENAI_API_BASE_URL: "vercel.askopenai.tech",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
