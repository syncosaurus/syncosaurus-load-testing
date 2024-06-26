import { nanoid } from "nanoid";
import "dotenv/config";

export async function generateClientId(userContext, _events) {
  const clientID = nanoid();
  userContext.vars.clientID = clientID;
}

export async function generateCoordinates(userContext, _events) {
  const x = Math.floor(Math.random() * 1000);
  const y = Math.floor(Math.random() * 1000);

  userContext.vars.coordinates = { x, y };
}

export async function getTargetUrl() {
  console.log(process.env.DO_URL);
}
