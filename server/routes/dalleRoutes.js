import express  from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

import PostSchema from "../mongodb/models/post";

dotenv.config();

const router = express.Router();