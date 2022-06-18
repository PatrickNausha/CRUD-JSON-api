const documents = {};

const getNextDocumentId = (() => {
	let documentId = 0;
	return () => ++documentId;
})();

function createDocument(object) {
	const id = getNextDocumentId();
	documents[id] = object;
	return id;
}

function getDocument(id) {
	return documents[id] || null;
}

function updateDocument(object) {
	documents[id] = object;
}

function deleteDocument() {
	if (!documents[id]) {
		return false;
	}

	delete documents[id];
	return true;
}

module.exports = {
	createDocument,
	getDocument,
	updateDocument,
	deleteDocument,
};
