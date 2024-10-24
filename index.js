<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet</title>
    <script>
        async function ajouterNom() {
            const nom = document.getElementById('nom').value;
            const response = await fetch('http://20.199.94.57:3000/backend-api-vm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nom })
            });
            const result = await response.text();
            alert(result);
        }
    </script>
</head>
<body>
    <h1>Ajouter un Nom</h1>
    <input type="text" id="nom" placeholder="Entrez un nom" />
    <button onclick="ajouterNom()">Ajouter</button>
</body>
</html>
