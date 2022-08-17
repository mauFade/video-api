import { Subject } from "../entities/Subject";
import { ICreateSubjectDTO } from "../usecases/Subjects/CreateSubject/CreateSubjectDTO";
import { IUpdateSubjectDTO } from "../usecases/Subjects/UpdateSubject/UpdateSubjectDTO";
import { IDeleteSubjectDTO } from "../usecases/Subjects/DeleteSubject/DeleteSubjectDTO";

export interface ISubjectRepository {
  create: (data: ICreateSubjectDTO) => Promise<Subject>;
  fetch: () => Promise<Subject[]>;
  update: (data: IUpdateSubjectDTO) => Promise<Subject>;
  delete: (data: IDeleteSubjectDTO) => Promise<void>;
}
