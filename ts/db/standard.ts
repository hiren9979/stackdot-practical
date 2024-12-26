import { execute } from "../common/common";
import RESPONSES from "../common/response";

export async function addStandardDB(data: any) {
    try {
        let query = `INSERT INTO stackdot.standards (id, name, class_category_id) 
                   VALUES (?, ?, ?);`;
        let result = await execute(query, [
            data.id,
            data.name,
            data.classCategoryId
        ]);
        if (result.affectedRows === 0) {
            return RESPONSES.badRequest;
        }
        return RESPONSES.success;
    } catch (e) {
        return RESPONSES.tryAgain;
    }
}

export async function getStandardByClassCategoryDB(data: any) {
    try {
        let query = `SELECT * FROM stackdot.standards WHERE class_category_id = ?`;
        let result = await execute(query, [
            data.classCategoryId
        ]);
        if (result.affectedRows === 0) {
            return RESPONSES.badRequest;
        }
        return result;
    } catch (e) {
        return RESPONSES.tryAgain;
    }
}
