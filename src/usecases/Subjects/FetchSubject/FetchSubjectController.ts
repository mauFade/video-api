import { Request, Response } from "express";
import { FetchSubjectUseCase } from "./FetchSubjectUseCase";

export class FetchSubjectController {
  constructor(private fetchSubjectUseCase: FetchSubjectUseCase) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    const subjects = await this.fetchSubjectUseCase.fetch();

    return response.status(200).send({ success: true, subjects });
  }
}
