import { Response } from "express";
import { sendResponse } from "../../common/common";
import { addUserRegistrationDB } from "../../db/user";
import { generateV4uuid } from "../../common/util";
import bcrypt from "bcrypt";

export default async function registerUser(request: any, response: Response) {
  try {
    const data = {
      id: generateV4uuid(),
      instituteTypeId: request.body.instituteTypeId,
      boardId: request.body.boardId,
      mediumId: request.body.mediumId,
      classCategoryId: request.body.classCategoryId,
      standardId: request.body.standardId
    };

    const info = await addUserRegistrationDB(data);
    return sendResponse(request, response, info.statusCode, info.clientMessage);
  } catch (e: any) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}
