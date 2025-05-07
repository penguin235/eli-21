<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Wicked Input Cards</title>
  <style>
    body {
      background-color: #1b1f1f;
      color: #e0ffe0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }
    h1 {
      color: #76ff76;
      margin-bottom: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #2a2f2f;
      padding: 1rem 2rem;
      border-radius: 10px;
      box-shadow: 0 0 10px #00ff00aa;
      margin-bottom: 2rem;
    }
    input[type="text"] {
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 2px solid #76ff76;
      border-radius: 5px;
      background-color: #333;
      color: #e0ffe0;
      width: 200px;
    }
    button {
      background-color: #76ff76;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .card {
      background-color: #2a2f2f;
      border: 2px solid #00ff00aa;
      border-radius: 10px;
      padding: 1rem;
      box-shadow: 0 0 10px #00ff00aa;
      min-width: 200px;
      max-width: 300px;
      color: #e0ffe0;
    }
  </style>
</head>
<body>
  <h1>Wicked Inputs</h1>
  <form id="inputForm">
    <input type="text" id="fieldOne" placeholder="Wicked thought #1" required />
    <input type="text" id="fieldTwo" placeholder="Wicked thought #2" required />
    <button type="submit">Submit</button>
  </form>
  <div class="cards" id="cardContainer"></div>

  <script>
    const form = document.getElementById('inputForm');
    const fieldOne = document.getElementById('fieldOne');
    const fieldTwo = document.getElementById('fieldTwo');
    const container = document.getElementById('cardContainer');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const value1 = fieldOne.value.trim();
      const value2 = fieldTwo.value.trim();
      if (value1 !== '' && value2 !== '') {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<strong>Thought #1:</strong> ${value1}<br><strong>Thought #2:</strong> ${value2}`;
        container.appendChild(card);
        fieldOne.value = '';
        fieldTwo.value = '';
      }
    });
  </script>
</body>
</html>
