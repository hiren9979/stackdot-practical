import { execute } from "../common/common";
import RESPONSES from "../common/response";

export async function addSubjectDB(data: any) {
    try {
        let query = `INSERT INTO stackdot.subjects (id, name, standard_id) 
                   VALUES (?, ?, ?);`;
        let result = await execute(query, [
            data.id,
            data.name,
            data.standardId
        ]);
        if (result.affectedRows === 0) {
            return RESPONSES.badRequest;
        }
        return RESPONSES.success;
    } catch (e) {
        return RESPONSES.tryAgain;
    }
}

export async function getSubjectByStandrdId(data: any) {
    try {
        let query = `SELECT * FROM stackdot.subjects WHERE standard_id = ?`;
        let result = await execute(query, [
            data.standardId
        ]);
        if (result.affectedRows === 0) {
            return RESPONSES.badRequest;
        }
        return result;
    } catch (e) {
        return RESPONSES.tryAgain;
    }
}
