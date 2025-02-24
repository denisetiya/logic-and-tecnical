import response from "./api.response";
import { Response } from "express";

const handleValidationError = (validateData: any, res: Response, guide? : any | null) => {
    if (!validateData.success) {
        const errors = validateData.error.errors.map((err: { path: any[]; message: any; }) => ({
            path: err.path.join('.'),
            message: err.message
        }));
        return response(res, 400, errors, null, {
            "guide": guide
        });
    }
};

export default handleValidationError;