import { ISubjectRepository } from "../../../repositories/Subject";

export class FetchSubjectUseCase {
  constructor(private fetchSubjectRepo: ISubjectRepository) {}

  async fetch() {
    const subject = await this.fetchSubjectRepo.fetch();

    return subject;
  }
}
