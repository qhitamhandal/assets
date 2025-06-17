const container = document.getElementById("file-container");

const apiURL = "https://api.github.com/repos/qhitamhandal/files/contents/files";

fetch(apiURL)
    .then(res => res.json())
    .then(files => {
        files.forEach(file => {
            const card = document.createElement("div");
            card.className = "card";

            const icon = getIcon(file.name);

            card.innerHTML = `
        <div>${icon} <strong>${file.name}</strong></div>
        <a href="${file.download_url}" target="_blank">Download</a>
      `;

            container.appendChild(card);
        });
    })
    .catch(err => {
        container.innerHTML = "<p>Gagal mengambil data dari GitHub.</p>";
        console.error(err);
    });

function getIcon(filename) {
    const ext = filename.split(".").pop().toLowerCase();
    const icons = {
        pdf: "📄",
        jpg: "🖼️",
        png: "🖼️",
        txt: "📃",
        zip: "🗜️",
        default: "📁"
    };
    return icons[ext] || icons.default;
}
