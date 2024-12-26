import { Response } from "express";
import { sendResponse } from "../../common/common";
import { generateV4uuid } from "../../common/util";
import { addStandardDB, getStandardByClassCategoryDB } from "../../db/standard";

export default async function getStandard(request: any, response: Response) {
    try {
        const data = {
            id: generateV4uuid(),
            classCategoryId: request.headers.classcategoryid
        };

        const info = await getStandardByClassCategoryDB(data);
        return sendResponse(request, response, 200, info);
    } catch (e: any) {
        return sendResponse(request, response, 400, { Message: e.message });
    }
}
