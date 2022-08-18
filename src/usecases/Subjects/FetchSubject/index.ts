import { TypeORMSubjectRepository } from "../../../repositories/TypeORM/TypeORMSubjectRepository";
import { FetchSubjectController } from "./FetchSubjectController";
import { FetchSubjectUseCase } from "./FetchSubjectUseCase";

const typeORMSubjectRepository = new TypeORMSubjectRepository();

const subjectUseCase = new FetchSubjectUseCase(typeORMSubjectRepository);

const fetchSubjectController = new FetchSubjectController(subjectUseCase);

export { subjectUseCase, fetchSubjectController };
