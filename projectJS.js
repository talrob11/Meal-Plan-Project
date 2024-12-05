
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
 
  function generateMealPlan() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const meals = []; 
    for (let i = 0; i < 7; i++) {
      let dayPlan = {
        breakfast: document.getElementById(`breakfast-${i}`).value,
        snack1: document.getElementById(`snack1-${i}`).value,
        lunch: document.getElementById(`lunch-${i}`).value,
        snack2: document.getElementById(`snack2-${i}`).value,
        dinner: document.getElementById(`dinner-${i}`).value,
      };
      meals.push(dayPlan);
    }
  

    document.write(`
      <html>
        <head>
          <title>${name}'s Weekly Meal Plan</title>
          <style>
            body { font-family: Courier New, monospace; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { border: 1px solid black; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>${name}'s Weekly Meal Plan</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Goal for the Week:</strong> ${goal}</p>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Snack 1</th>
                <th>Lunch</th>
                <th>Snack 2</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              ${meals
                .map((meal, index) => `
                  <tr>
                    <td>${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][index]}</td>
                    <td>${meal.breakfast}</td>
                    <td>${meal.snack1}</td>
                    <td>${meal.lunch}</td>
                    <td>${meal.snack2}</td>
                    <td>${meal.dinner}</td>
                  </tr>
                `)
                .join('')}
            </tbody>
          </table>
          <button onclick="window.print()">Print</button>
        </body>
      </html>
    `);
  }
  