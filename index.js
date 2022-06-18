const express = require("express");
const app = express();
const port = 3000;

const { createDocument, getDocument } = require("./document-repository");

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});

app.use(express.json());

app.get("/documents/:id", (req, res) => {
	const document = getDocument(req.params.id);

	if (!document) {
		return res.status(400).json({
			error: `Could not find document with ID ${req.params.id}`,
		});
	}

	return res.json(document);
});

app.post("/documents", (req, res) => {
	const document = req.body.document;
	if (!document) {
		return res.status(400).json({
			error: "Request must be JSON body with document property",
		});
	}

	const id = createDocument(document);

	res.status(201).json({ id });
});

app.use((req, res) => {
	res.status(404).json({ error: "Not found" });
});
