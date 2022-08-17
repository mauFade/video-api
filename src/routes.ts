import { Router } from "express";
import { createSubjectController } from "./usecases/Subjects/CreateSubject";

const router = Router();

router.post("/subject", (request, response) => {
  return createSubjectController.handle(request, response);
});

export { router };
