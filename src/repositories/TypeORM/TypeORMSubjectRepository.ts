import { Subject } from "../../entities/Subject";
import { ISubjectRepository } from "../Subject";

import { AppDataSource } from "../../data-source";

import { IUpdateSubjectDTO } from "../../usecases/Subjects/UpdateSubject/UpdateSubjectDTO";
import { ICreateSubjectDTO } from "../../usecases/Subjects/CreateSubject/CreateSubjectDTO";
import { IDeleteSubjectDTO } from "../../usecases/Subjects/DeleteSubject/DeleteSubjectDTO";

export class TypeORMSubjectRepository implements ISubjectRepository {
  subjectRepo = AppDataSource.getRepository(Subject);

  async create({ name }: ICreateSubjectDTO) {
    const subject = this.subjectRepo.create({ name });

    return subject;
  }

  async fetch() {
    const subjects = await this.subjectRepo.find();

    return subjects;
  }

  async update({ id, name }: IUpdateSubjectDTO) {
    const subject = await this.subjectRepo.save({ id, name });

    return subject;
  }

  async delete({ id }: IDeleteSubjectDTO) {
    this.subjectRepo.createQueryBuilder().softDelete().where({ id });
  }
}
