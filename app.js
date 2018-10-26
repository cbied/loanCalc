// Listen for Sumbit
const form = document.getElementById('loan-form');
form.addEventListener('submit', function(e) {
    // Hide results
    document.getElementById('results').style.display = 'none';

    // show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 1500);

  e.preventDefault();
});

// Calc results function
function calculateResults() {
  // UI Var inputs
  const UIamount = document.getElementById('amount');
  const UIinterest = document.getElementById('interest');
  const UIyears = document.getElementById('years');
  // UI Var results
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  // Calculations
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  // Compute monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    // show results
    document.getElementById('results').style.display = 'block';
    // hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }



}


// Show error function
function showError(error) {
    // hide results
    document.getElementById('results').style.display = 'none';
    // hide loader
    document.getElementById('loading').style.display = 'none';

    // create div
    const errorDiv = document.createElement('div');
    // add class
    errorDiv.className = 'alert alert-danger';
    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));


    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // clear error
    setTimeout(clearError, 3000)
  }

    // clear error function
    function clearError() {
      document.querySelector('.alert').remove();
    }
