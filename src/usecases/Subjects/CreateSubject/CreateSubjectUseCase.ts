import { ISubjectRepository } from "../../../repositories/Subject";
import { ICreateSubjectDTO } from "./CreateSubjectDTO";

export class CreateSubjectUseCase {
  constructor(private subjectRepo: ISubjectRepository) {}

  async create({ name }: ICreateSubjectDTO) {
    if (!name) {
      throw new Error("Name is required.");
    }

    const subject = await this.subjectRepo.create({ name });

    return subject;
  }
}
