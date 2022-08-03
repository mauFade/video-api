import { app } from "./app";

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.info(`Server running on port: ${PORT}`));
