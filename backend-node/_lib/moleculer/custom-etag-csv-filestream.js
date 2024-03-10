module.exports = {
    name: "export",
    actions: {
        // Download response as a file in the browser
        downloadCSV(ctx) {
            ctx.meta.$responseType = "text/csv";
            ctx.meta.$responseHeaders = {
                "Content-Disposition": `attachment; filename="data-${ctx.params.id}.csv"`,
                "ETag": '<your etag here>'
            };
            return csvFileStream;
        }
    }
}