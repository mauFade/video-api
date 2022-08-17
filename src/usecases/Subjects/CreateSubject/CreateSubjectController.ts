import { Request, Response } from "express";
import { ICreateSubjectDTO } from "./CreateSubjectDTO";
import { CreateSubjectUseCase } from "./CreateSubjectUseCase";

export class CreateSubjectController {
  constructor(private createSubjectUseCase: CreateSubjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name }: ICreateSubjectDTO = request["body"];

    try {
      const subject = await this.createSubjectUseCase.create({ name });

      return response.status(201).send({ success: true, subject });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
