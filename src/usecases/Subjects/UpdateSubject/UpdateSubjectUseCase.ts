import { ISubjectRepository } from "../../../repositories/Subject";
import { IUpdateSubjectDTO } from "./UpdateSubjectDTO";

export class UpdateSubjectUSeCase {
  constructor(private updateSubjectRepo: ISubjectRepository) {}

  async update({ name, id }: IUpdateSubjectDTO) {
    if (!id) {
      throw new Error("No id provided");
    }

    const subject = await this.updateSubjectRepo.update({ name, id });

    return subject;
  }
}
