import { TypeORMSubjectRepository } from "../../../repositories/TypeORM/TypeORMSubjectRepository";
import { CreateSubjectController } from "./CreateSubjectController";
import { CreateSubjectUseCase } from "./CreateSubjectUseCase";

const typeORM = new TypeORMSubjectRepository();

const createSubjectUseCase = new CreateSubjectUseCase(typeORM);

const createSubjectController = new CreateSubjectController(
  createSubjectUseCase
);

export { createSubjectUseCase, createSubjectController };
