import { Response } from "express";
import { sendResponse } from "../../common/common";
import { generateV4uuid } from "../../common/util";
import { addStandardDB, getStandardByClassCategoryDB } from "../../db/standard";
import { getSubjectByStandrdId } from "../../db/subject";

export default async function getSubjects(request: any, response: Response) {
    try {
        const data = {
            id: generateV4uuid(),
            standardId: request.headers.standardid
        };

        const info = await getSubjectByStandrdId(data);
        return sendResponse(request, response, 200, info);
    } catch (e: any) {
        return sendResponse(request, response, 400, { Message: e.message });
    }
}
