document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('image');
    const fileCardsContainer = document.getElementById('file-cards');

    fileInput.addEventListener('change', function () {
        fileCardsContainer.innerHTML = ''; // Clear previous file cards
        const files = fileInput.files;

        if (files.length > 0) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const fileCard = document.createElement('div');
                    fileCard.className = 'w-52 bg-white shadow rounded-lg border border-gray-200 p- flex flex-col items-center';

                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = file.name;
                    img.className = 'w-full h-4/5 object-center p-1.5 rounded-md';

                    const fileName = document.createElement('p');
                    fileName.textContent = file.name.slice(0, 24) + "...";
                    fileName.className = 'text-sm leading-6 text-gray-600';

                    fileCard.appendChild(img);
                    fileCard.appendChild(fileName);

                    fileCardsContainer.appendChild(fileCard);
                }
                reader.readAsDataURL(file);
            });
        }
    });
});

document.getElementById('avatar').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const avatarPreview = document.getElementById('avatarPreview');
        const avatarPlaceholder = document.getElementById('avatarPlaceholder');
        avatarPreview.src = e.target.result;
        avatarPreview.classList.remove('hidden');
        avatarPlaceholder.classList.add('hidden');
      }
      reader.readAsDataURL(file);
    }
  });