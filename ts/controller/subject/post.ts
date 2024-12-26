import { Response } from "express";
import { sendResponse } from "../../common/common";
import { generateV4uuid } from "../../common/util";
import { addStandardDB } from "../../db/standard";
import { addSubjectDB } from "../../db/subject";

export default async function addSubject(request: any, response: Response) {
  try {
    const data = {
      id: generateV4uuid(),
      name: request.body.name,
      standardId: request.body.standardId
    };

    const info = await addSubjectDB(data);
    return sendResponse(request, response, info.statusCode, info.clientMessage);
  } catch (e: any) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}
