import OpenAI from 'openai';
import { chatGPT_Key } from './constant';

const openai = new OpenAI({
  apiKey: chatGPT_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
  organization: 'org-2IxhsP9AQFp9SbcSlPNLb29o',
});

export default openai;