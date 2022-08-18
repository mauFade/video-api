import { Router } from "express";
import { createSubjectController } from "./usecases/Subjects/CreateSubject";

const router = Router();
// cor do terminal: #242730

router.post("/api/v1/subject", (request, response) => {
  return createSubjectController.handle(request, response);
});

export { router };
