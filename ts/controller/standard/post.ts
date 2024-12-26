import { Response } from "express";
import { sendResponse } from "../../common/common";
import { generateV4uuid } from "../../common/util";
import { addStandardDB } from "../../db/standard";

export default async function addStandard(request: any, response: Response) {
  try {
    const data = {
      id: generateV4uuid(),
      name: request.body.name,
      classCategoryId: request.body.classCategoryId
    };

    const info = await addStandardDB(data);
    return sendResponse(request, response, info.statusCode, info.clientMessage);
  } catch (e: any) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}
