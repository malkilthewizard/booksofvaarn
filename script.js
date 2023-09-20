document.getElementById('generateButton').addEventListener('click', function() {
    // Data for each column
    const coverData = ["Waterlogged", "Burned", "Green", "Golden", "Snake Skin", "Yellow", "Orange", "Mouldy", "Plastic", "Iridescent", "Rusted", "Striped", "Silver", "Ochre", "White", "Blue", "Black", "Sunbleached", "Jewelled", "Indigo"];
    const authorData = ["Anonymous", "Armiger", "Autarch", "Bad Artist", "Bad Poet", "Cacogen", "Condemned Criminal", "Courtesan", "Deposed Autarch", "Deposed Hegemon", "Great Artist", "Great Poet", "Hegemon", "Madman", "Monk", "Priest", "Prophet", "Synth", "Titan", "Warrior"];
    const styleData = ["Insane", "Wry", "Sardonic", "Formal", "Moralising", "Pious", "Purple", "Archaic", "Heroic", "Passionate", "Earnest", "Rhyming", "Comedic", "Lyrical", "Monotonous", "Lively", "Dry", "Hysterical", "Awkward", "Pedantic"];
    const subjectData = ["Medicine", "Bestiary", "Botany", "Synthetic Life", "Xenobiology", "War", "Geology", "Biography", "The Future", "History", "Dreams", "Drugs", "Travel", "Art", "Poetry", "The Autarchs", "Religion", "Hypergeometry", "Physics", "Sex"];
    const notableFeatureData = ["Extremely Heavy", "Every Word Is A Lie", "Bloodstains", "Elaborate Illustrations", "Poisoned Bookmark", "From An Autarch’s Library", "Coded Message Inside Cover", "Love Letter Inside Cover", "From Another Planet", "Luminous Ink", "Poisoned Page", "Tiny Weapon Hidden Inside", "Unknown Language", "Fabulously Rare", "Illuminated With Gold Leaf", "Heretical Text", "Worm-eaten", "Clever Forgery", "Drugs Hidden Inside", "Utterly Illegible"];

    // Access the table body
    const tableBody = document.querySelector('#booksTable tbody');

    // Remove the row with column names
    tableBody.innerHTML = '';

    // Generate random indices for each column
    const randomIndexCover = Math.floor(Math.random() * coverData.length);
    const randomIndexAuthor = Math.floor(Math.random() * authorData.length);
    const randomIndexStyle = Math.floor(Math.random() * styleData.length);
    const randomIndexSubject = Math.floor(Math.random() * subjectData.length);
    const randomIndexNotableFeature = Math.floor(Math.random() * notableFeatureData.length);

    // Create a new row with the random entries
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${coverData[randomIndexCover]}</td>
        <td>${authorData[randomIndexAuthor]}</td>
        <td>${styleData[randomIndexStyle]}</td>
        <td>${subjectData[randomIndexSubject]}</td>
        <td>${notableFeatureData[randomIndexNotableFeature]}</td>
    `;

    // Append the new row to the table
    tableBody.appendChild(newRow);
});