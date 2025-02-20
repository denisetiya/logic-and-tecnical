import { Response } from "express";

const response = (
    res: Response,
    status: number,
    error: any = null,
    docs: any = null,
    meta : any = null
) => {
    return res.status(status).json({
        ...(error && { error }), 
        ...(docs && { docs }),
        ...(meta && { meta })
    });
};

export default response;